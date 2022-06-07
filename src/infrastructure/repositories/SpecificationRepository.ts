import { ICreateSpecificationDTO } from "../../domain/dtos/ICreateSpecificationDTO";
import { Specification } from "../../domain/models/Specification";
import { ISpecificationRepository } from "../../domain/repositories/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private static SPECIFICATIONS: Specification[];

    private specifications: Specification[];
    constructor() {
        if (!SpecificationRepository.SPECIFICATIONS)
            SpecificationRepository.SPECIFICATIONS = [];

        this.specifications = SpecificationRepository.SPECIFICATIONS;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification(name, description);
        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        return this.specifications.find((x) => x.name === name);
    }

}

export { SpecificationRepository }