import { IListCategoryDTO } from "../domain/dtos/IListCategoryDTO";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";
import { IListCategoryService } from "../domain/services/IListCategoryService";

class ListCategoryService implements IListCategoryService {
    constructor(private categoryRepository: ICategoryRepository) { }

    async execute(): Promise<IListCategoryDTO[]> {
        const categories: IListCategoryDTO[] = await this.categoryRepository.getAll();

        return categories;
    }

}

export { ListCategoryService }