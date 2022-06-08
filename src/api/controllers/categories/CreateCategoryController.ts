import { Response, Request } from "express"
import { ICreateCategoryService } from "../../../domain/services/ICreateCategoryService";

class CreateCategoryController {
    constructor(private createCategoryService: ICreateCategoryService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        await this.createCategoryService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController }