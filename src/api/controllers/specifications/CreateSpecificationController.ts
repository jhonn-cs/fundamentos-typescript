import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost, IHttpActionResult, request, response } from "inversify-express-utils";
import ICreateSpecificationService from "../../../domain/services/ICreateSpecificationService";
import { CreateSpecificationService } from "../../../services/CreateSpecificationService";
import BaseSpecificationController, { ROUTE_PREFIX } from "./BaseSpecificationController";

@controller(ROUTE_PREFIX)
export class CreateSpecificationController extends BaseSpecificationController {
    constructor(
        @inject(CreateSpecificationService)
        private createSpecificationService: ICreateSpecificationService) {
        super();
    }

    @httpPost("/")
    async handle(@request() request: Request, @response() response: Response): Promise<IHttpActionResult> {
        const { name, description } = request.body;

        let specification = await this.createSpecificationService.execute({ name, description });

        return this.created(`/${ROUTE_PREFIX}/${specification.id}`, null);
    }
}