import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost, interfaces, request, response } from "inversify-express-utils";
import ICreateCategoryService from "../../../domain/services/ICreateCategoryService";
import { CreateCategoryService } from "../../../services/CreateCategoryService";
import BaseCategoryController, { ROUTE_PREFIX } from "./BaseCategoryController";

@controller(ROUTE_PREFIX)
export class CreateCategoryController extends BaseCategoryController {
    constructor(
        @inject(CreateCategoryService)
        private createCategoryService: ICreateCategoryService) {
        super();
    }

    @httpPost("/")
    private async handle(@request() request: Request, @response() response: Response): Promise<interfaces.IHttpActionResult> {
        try {
            const { name, description } = request.body;

            const category = await this.createCategoryService.execute({ name, description });

            return this.created(`/${ROUTE_PREFIX}/${category.id}`, null);

        } catch (error) {
            return this.internalServerError(error);
        }
    }
}