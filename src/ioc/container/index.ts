import { PrismaClient } from "@prisma/client";
import { interfaces } from "inversify";
import { CreateCategoryController } from "../../api/controllers/categories/CreateCategoryController";
import ICategoryRepository from "../../domain/repositories/ICategoryRepository";
import ISpecificationRepository from "../../domain/repositories/ISpecificationRepository";
import ICreateCategoryService from "../../domain/services/ICreateCategoryService";
import ICreateSpecificationService from "../../domain/services/ICreateSpecificationService";
import IImportCategoryService from "../../domain/services/IImportCategoryService";
import IListCategoryService from "../../domain/services/IListCategoryService";
import PrismaClientFactory from "../../infrastructure/database";
import { CategoryRepository } from "../../infrastructure/repositories/CategoryRepository";
import { SpecificationRepository } from "../../infrastructure/repositories/SpecificationRepository";
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { ImportCategoryService } from "../../services/ImportCategoryService";
import { ListCategoryService } from "../../services/ListCategoryService";

export default function configureDependencies(container: interfaces.Container) {
    // Repositories
    container.bind<ICategoryRepository>(CategoryRepository).to(CategoryRepository);
    container.bind<ISpecificationRepository>(SpecificationRepository).to(SpecificationRepository);

    // Services
    container.bind<ICreateCategoryService>(CreateCategoryService).to(CreateCategoryService);
    container.bind<ICreateSpecificationService>(CreateSpecificationService).to(CreateSpecificationService);
    container.bind<IImportCategoryService>(ImportCategoryService).to(ImportCategoryService);
    container.bind<IListCategoryService>(ListCategoryService).to(ListCategoryService);

    //Controller
    container.bind<CreateCategoryController>(CreateCategoryController).to(CreateCategoryController);

    container.bind<PrismaClient>(PrismaClient)
        .toDynamicValue(PrismaClientFactory)
        .inRequestScope();

}