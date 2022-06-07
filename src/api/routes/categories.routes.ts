import { Router } from "express";
import { CategoryRepository } from "../../infrastructure/repositories/CategoryRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { ListCategoryService } from "../../services/ListCategoryService";
import { CreateCategoryController } from "../controllers/categories/CreateCategoryController";
import { ListCategoryController } from "../controllers/categories/ListCategoryController";

const categoryRepository = new CategoryRepository();
const createCategoryService = new CreateCategoryService(categoryRepository);
const listCategoryService = new ListCategoryService(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);
const listCategoryController = new ListCategoryController(listCategoryService);

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});

export default categoriesRoutes;