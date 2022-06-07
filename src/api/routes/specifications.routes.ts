import { Router } from "express";
import { SpecificationRepository } from "../../infrastructure/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { CreateSpecificationController } from "../controllers/specifications/CreateSpecificationController";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();
const createSpecificationService = new CreateSpecificationService(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationService);

specificationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export default specificationsRoutes;
