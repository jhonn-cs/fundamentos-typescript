import { Prisma, PrismaClient } from "@prisma/client";
import { ICreateSpecificationDTO } from "../../domain/dtos/ICreateSpecificationDTO";
import { Specification } from "../../domain/models/Specification";
import { ISpecificationRepository } from "../../domain/repositories/ISpecificationRepository";
import prisma from "./database";

class SpecificationRepository implements ISpecificationRepository {
    private db: PrismaClient;
    private specifications: Prisma.SpecificationDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

    constructor() {
        this.db = prisma;
        this.specifications = prisma.specification;
    }

    create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification(name, description);
        return this.specifications.create({ data: specification });
    }

    async findByName(name: string): Promise<Specification> {
        return await this.specifications.findFirst(
            {
                where: {
                    name: name
                }
            });
    }

}

export { SpecificationRepository }