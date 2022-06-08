import { ICreateSpecificationService } from "../domain/services/ICreateSpecificationService";
import { ICreateSpecificationDTO } from "../domain/dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "../domain/repositories/ISpecificationRepository";

class CreateSpecificationService implements ICreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) { }

    async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specificationAlreadyExists = await this.specificationRepository.findByName(name);
        if (specificationAlreadyExists)
            throw new Error("Specification already exists.");

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService }