import { Prisma, PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import IAddSpecificationDTO from "../../domain/dtos/specification/IAddSpecificationDTO";
import { Specification } from "../../domain/entities/Specification";
import ISpecificationRepository from "../../domain/repositories/ISpecificationRepository";

@injectable()
class SpecificationRepository implements ISpecificationRepository {
    private specifications: Prisma.SpecificationDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

    constructor(
        @inject(PrismaClient)
        private client: PrismaClient) {
        this.specifications = client.specification;
    }

    create({ name, description }: IAddSpecificationDTO): Promise<Specification> {
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

export { SpecificationRepository };

