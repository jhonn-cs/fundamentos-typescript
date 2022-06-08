import { Prisma, PrismaClient } from "@prisma/client";
import { ICreateCategoryDTO } from "../../domain/dtos/ICreateCategoryDTO";
import { Category } from "../../domain/models/Category";
import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import prisma from "../database";

class CategoryRepository implements ICategoryRepository {
    private db: PrismaClient;
    private categories: Prisma.CategoryDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
    constructor() {
        this.db = prisma;
        this.categories = prisma.category
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
        const category = new Category(name, description);

        return await this.categories.create({
            data: category
        });
    }

    async getAll(): Promise<Category[]> {
        return await this.categories.findMany();
    }

    async findByName(name: string): Promise<Category> {
        return await this.categories.findFirst(
            {
                where: {
                    name: name
                }
            }
        );
    }
}

export { CategoryRepository }