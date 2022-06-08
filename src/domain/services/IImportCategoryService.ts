export default interface IImportCategoryService {
    execute(file: Express.Multer.File): Promise<void>;
}