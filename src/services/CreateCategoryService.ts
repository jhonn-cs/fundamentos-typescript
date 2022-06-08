import { ICreateCategoryDTO } from "../domain/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";
import { ICreateCategoryService } from "../domain/services/ICreateCategoryService";

class CreateCategoryService implements ICreateCategoryService {
    constructor(private categoryrepository: ICategoryRepository) { }

    async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
        const categoryAlreadyExists = await this.categoryrepository.findByName(name);
        if (categoryAlreadyExists)
            throw new Error("Category already exists.");

        await this.categoryrepository.create({ name, description })
    }
}

export { CreateCategoryService }