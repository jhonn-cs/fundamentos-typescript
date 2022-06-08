import { IImportCategoryService } from "../domain/services/IImportCategoryService";
import fs from "fs"
import { parse as csvParser } from "csv-parse"
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";
import { ICreateCategoryDTO } from "../domain/dtos/ICreateCategoryDTO";

class ImportCategoryService implements IImportCategoryService {
    constructor(private categoryRepository: ICategoryRepository) { }

    loadCategories(file: Express.Multer.File): Promise<ICreateCategoryDTO[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParser();

            stream.pipe(parseFile)

            const categories: ICreateCategoryDTO[] = [];
            parseFile.on("data", async (line) => {
                const [name, description] = line;
                categories.push({ name, description })
            })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const existCategory = this.categoryRepository.findByName(category.name);
            if (!existCategory)
                this.categoryRepository.create(category);
        });
    }

}

export { ImportCategoryService }