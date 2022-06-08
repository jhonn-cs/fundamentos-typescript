import { parse as csvParser } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "inversify";
import IAddCategoryDTO from "../domain/dtos/category/IAddCategoryDTO";
import ICategoryRepository from "../domain/repositories/ICategoryRepository";
import IImportCategoryService from "../domain/services/IImportCategoryService";
import { CategoryRepository } from "../infrastructure/repositories/CategoryRepository";

@injectable()
export class ImportCategoryService implements IImportCategoryService {
    constructor(
        @inject(CategoryRepository)
        private categoryRepository: ICategoryRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IAddCategoryDTO[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParser();

            stream.pipe(parseFile)

            const categories: IAddCategoryDTO[] = [];
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
            const existCategory = await this.categoryRepository.findByName(category.name);
            if (!existCategory)
                await this.categoryRepository.create(category);
        });
    }

}