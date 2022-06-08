import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";

interface ICreateCategoryService {
    execute({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICreateCategoryService }