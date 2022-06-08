import { Request, Response } from "express"
import { IImportCategoryService } from "../../../domain/services/IImportCategoryService";

class ImportCategoryController {
    constructor(private importCategoryService: IImportCategoryService) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;
        await this.importCategoryService.execute(file);

        return response.send();
    }
}

export { ImportCategoryController }