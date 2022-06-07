import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";

interface ICreateCategoryService {
    execute({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoryService }