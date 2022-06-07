import { ICreateCategoryDTO } from "../domain/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "../domain/repositories/ICategoryRepository";
import { ICreateCategoryService } from "../domain/services/ICreateCategoryService";

class CreateCategoryService implements ICreateCategoryService {
    constructor(private categoryrepository: ICategoryRepository) { }

    execute({ name, description }: ICreateCategoryDTO): void {
        const categoryAlreadyExists = this.categoryrepository.findByName(name);
        if (categoryAlreadyExists)
            throw new Error("Category already exists.");

        this.categoryrepository.create({ name, description })
    }
}

export { CreateCategoryService }