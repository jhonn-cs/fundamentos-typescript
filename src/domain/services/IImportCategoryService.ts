interface IImportCategoryService {
    execute(file: Express.Multer.File): Promise<void>;
}

export { IImportCategoryService }