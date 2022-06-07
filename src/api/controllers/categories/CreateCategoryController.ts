import { Response, Request } from "express"
import { ICreateCategoryService } from "../../../domain/services/ICreateCategoryService";

class CreateCategoryController {
    constructor(private createCategoryService: ICreateCategoryService) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController }