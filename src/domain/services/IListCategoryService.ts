import { IListCategoryDTO } from "../dtos/IListCategoryDTO";

interface IListCategoryService {
    execute(): Promise<IListCategoryDTO[]>;
}

export { IListCategoryService }