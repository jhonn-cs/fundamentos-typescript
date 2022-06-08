import IAddCategoryDTO from "../dtos/category/IAddCategoryDTO";
import ICreatedCategoryDTO from "../dtos/category/ICreatedCategoryDTO";

export default interface ICreateCategoryService {
    execute({ name, description }: IAddCategoryDTO): Promise<ICreatedCategoryDTO>;
}