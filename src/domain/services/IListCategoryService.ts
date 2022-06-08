import IListCategoryDTO from "../dtos/category/IListCategoryDTO";

export default interface IListCategoryService {
    execute(): Promise<IListCategoryDTO[]>;
}