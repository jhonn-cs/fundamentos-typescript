import { inject, injectable } from "inversify";
import IAddSpecificationDTO from "../domain/dtos/specification/IAddSpecificationDTO";
import ICreatedSpecificationDTO from "../domain/dtos/specification/ICreatedSpecificationDTO";
import ISpecificationRepository from "../domain/repositories/ISpecificationRepository";
import ICreateSpecificationService from "../domain/services/ICreateSpecificationService";
import { SpecificationRepository } from "../infrastructure/repositories/SpecificationRepository";

@injectable()
export class CreateSpecificationService implements ICreateSpecificationService {
    constructor(
        @inject(SpecificationRepository)
        private specificationRepository: ISpecificationRepository) { }

    async execute({ name, description }: IAddSpecificationDTO): Promise<ICreatedSpecificationDTO> {
        const specificationAlreadyExists = await this.specificationRepository.findByName(name);
        if (specificationAlreadyExists)
            throw new Error("Specification already exists.");

        return await this.specificationRepository.create({ name, description }) as ICreatedSpecificationDTO;
    }
}