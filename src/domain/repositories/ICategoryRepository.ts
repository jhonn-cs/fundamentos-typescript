import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../models/Category"

interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    getAll(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<Category>;
}

export { ICategoryRepository }