import { Request, Response } from "express"
import { IListCategoryService } from "../../../domain/services/IListCategoryService";

class ListCategoryController {
    constructor(private listCategoryService: IListCategoryService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const categories = await this.listCategoryService.execute()

        return response.json(categories).send();
    }
}

export { ListCategoryController }