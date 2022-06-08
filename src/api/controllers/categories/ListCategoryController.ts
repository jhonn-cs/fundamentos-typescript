import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpGet, IHttpActionResult, request, response } from "inversify-express-utils";
import IListCategoryService from "../../../domain/services/IListCategoryService";
import { ListCategoryService } from "../../../services/ListCategoryService";
import BaseCategoryController, { ROUTE_PREFIX } from "./BaseCategoryController";

@controller(ROUTE_PREFIX)
export class ListCategoryController extends BaseCategoryController {
    constructor(
        @inject(ListCategoryService)
        private listCategoryService: IListCategoryService) {
        super();
    }

    @httpGet("/")
    async handle(@request() request: Request, @response() response: Response): Promise<IHttpActionResult> {
        try {
            const categories = await this.listCategoryService.execute()
            return this.json(categories, 200);
        } catch (error) {
            return this.internalServerError(error);
        }
    }
}