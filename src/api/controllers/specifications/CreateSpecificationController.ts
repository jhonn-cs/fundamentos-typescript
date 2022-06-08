import { Request, Response } from "express"
import { ICreateSpecificationService } from "../../../domain/services/ICreateSpecificationService";

class CreateSpecificationController {
    constructor(private createSpecificationService: ICreateSpecificationService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        await this.createSpecificationService.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController }