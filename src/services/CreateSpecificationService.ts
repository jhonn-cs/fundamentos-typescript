import { ICreateSpecificationService } from "../domain/services/ICreateSpecificationService";
import { ICreateSpecificationDTO } from "../domain/dtos/ICreateSpecificationDTO";
import { ISpecificationRepository } from "../domain/repositories/ISpecificationRepository";

class CreateSpecificationService implements ICreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) { }

    execute({ name, description }: ICreateSpecificationDTO) {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);
        if (specificationAlreadyExists)
            throw new Error("Specification already exists.");

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService }