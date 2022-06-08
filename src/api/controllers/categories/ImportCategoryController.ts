import { Request, Response } from "express"
import { IImportCategoryService } from "../../../domain/services/IImportCategoryService";

class ImportCategoryController {
    constructor(private importCategoryService: IImportCategoryService) { }

    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importCategoryService.execute(file);

        return response.send();
    }
}

export { ImportCategoryController }