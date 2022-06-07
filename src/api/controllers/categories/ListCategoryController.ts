import { Request, Response } from "express"
import { IListCategoryService } from "../../../domain/services/IListCategoryService";

class ListCategoryController {
    constructor(private listCategoryService: IListCategoryService) { }

    handle(request: Request, response: Response) {
        const categories = this.listCategoryService.execute()

        return response.json(categories);
    }
}

export { ListCategoryController }