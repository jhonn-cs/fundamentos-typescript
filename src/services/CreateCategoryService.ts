import { inject, injectable } from "inversify";
import IAddCategoryDTO from "../domain/dtos/category/IAddCategoryDTO";
import ICreatedCategoryDTO from "../domain/dtos/category/ICreatedCategoryDTO";
import ICategoryRepository from "../domain/repositories/ICategoryRepository";
import ICreateCategoryService from "../domain/services/ICreateCategoryService";
import { CategoryRepository } from "../infrastructure/repositories/CategoryRepository";

@injectable()
export class CreateCategoryService implements ICreateCategoryService {
    constructor(
        @inject(CategoryRepository)
        private categoryrepository: ICategoryRepository) { }

    async execute({ name, description }: IAddCategoryDTO): Promise<ICreatedCategoryDTO> {
        const categoryAlreadyExists = await this.categoryrepository.findByName(name);
        if (categoryAlreadyExists)
            throw new Error("Category already exists.");

        return await this.categoryrepository.create({ name, description }) as ICreatedCategoryDTO;
    }
}