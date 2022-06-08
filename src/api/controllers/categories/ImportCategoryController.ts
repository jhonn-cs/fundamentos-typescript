import { Request, Response } from "express";
import { inject } from "inversify";
import { controller, httpPost, IHttpActionResult, request, response } from "inversify-express-utils";
import multer from "multer";
import IImportCategoryService from "../../../domain/services/IImportCategoryService";
import { ImportCategoryService } from "../../../services/ImportCategoryService";
import BaseCategoryController, { ROUTE_PREFIX } from "./BaseCategoryController";

const upload = multer({
    dest: "./tmp"
});

@controller(ROUTE_PREFIX)
export class ImportCategoryController extends BaseCategoryController {
    constructor(
        @inject(ImportCategoryService)
        private importCategoryService: IImportCategoryService) {
        super();
    }

    @httpPost("/import", upload.single("file"))
    async handle(@request() request: Request, @response() response: Response): Promise<IHttpActionResult> {
        const { file } = request;
        await this.importCategoryService.execute(file);

        return this.ok();
    }
}