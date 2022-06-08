import IAddCategoryDTO from "../dtos/category/IAddCategoryDTO";
import { Category } from "../entities/Category"

export default interface ICategoryRepository {
    findByName(name: string): Promise<Category>;
    getAll(): Promise<Category[]>;
    create({ name, description }: IAddCategoryDTO): Promise<Category>;
}