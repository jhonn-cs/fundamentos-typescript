import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../models/Category"

interface ICategoryRepository {
    findByName(name: string): Category;
    getAll(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository }