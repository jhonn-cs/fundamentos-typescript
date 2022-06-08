import { Router } from "express";
import multer from "multer";
import { CategoryRepository } from "../../infrastructure/repositories/CategoryRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { ImportCategoryService } from "../../services/ImportCategoryService";
import { ListCategoryService } from "../../services/ListCategoryService";
import { CreateCategoryController } from "../controllers/categories/CreateCategoryController";
import { ImportCategoryController } from "../controllers/categories/ImportCategoryController";
import { ListCategoryController } from "../controllers/categories/ListCategoryController";

const categoryRepository = new CategoryRepository();

const createCategoryService = new CreateCategoryService(categoryRepository);
const listCategoryService = new ListCategoryService(categoryRepository);
const importCategoryService = new ImportCategoryService(categoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryService);
const listCategoryController = new ListCategoryController(listCategoryService);
const importCategoryController = new ImportCategoryController(importCategoryService);

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", async (request, response) => {
    return await createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", async (request, response) => {
    return await listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), async (request, response) => {
    return await importCategoryController.handle(request, response);
});

export default categoriesRoutes;