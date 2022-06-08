import { Prisma, PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import IAddCategoryDTO from "../../domain/dtos/category/IAddCategoryDTO";
import { Category } from "../../domain/entities/Category";
import ICategoryRepository from "../../domain/repositories/ICategoryRepository";

@injectable()
class CategoryRepository implements ICategoryRepository {
    private categories: Prisma.CategoryDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

    constructor(
        @inject(PrismaClient)
        private client: PrismaClient) {
        this.categories = client.category
    }

    async create({ name, description }: IAddCategoryDTO): Promise<Category> {
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

export { CategoryRepository };
