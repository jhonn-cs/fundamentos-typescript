import { Category } from "../domain/models/Category";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";
import { IListCategoryService } from "../domain/services/IListCategoryService";

class ListCategoryService implements IListCategoryService {
    constructor(private categoryRepository: ICategoryRepository) { }

    execute(): Category[] {
        return this.categoryRepository.getAll();
    }

}

export { ListCategoryService }