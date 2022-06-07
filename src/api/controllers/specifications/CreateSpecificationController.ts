import { Request, Response } from "express"
import { ICreateSpecificationService } from "../../../domain/services/ICreateSpecificationService";

class CreateSpecificationController {
    constructor(private createSpecificationService: ICreateSpecificationService) { }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createSpecificationService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController }