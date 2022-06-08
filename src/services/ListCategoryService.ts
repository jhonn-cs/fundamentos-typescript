import { inject, injectable } from "inversify";
import IListCategoryDTO from "../domain/dtos/category/IListCategoryDTO";
import ICategoryRepository from "../domain/repositories/ICategoryRepository";
import IListCategoryService from "../domain/services/IListCategoryService";
import { CategoryRepository } from "../infrastructure/repositories/CategoryRepository";

@injectable()
export class ListCategoryService implements IListCategoryService {
    constructor(
        @inject(CategoryRepository)
        private categoryRepository: ICategoryRepository) { }

    async execute(): Promise<IListCategoryDTO[]> {
        const categories = await this.categoryRepository.getAll();

        return categories?.map((category) => {
            const { name, description } = category
            return { name, description } as IListCategoryDTO;
        });
    }

}