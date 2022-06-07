import { Category } from "../models/Category";

interface IListCategoryService {
    execute(): Category[];
}

export { IListCategoryService }