import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";

interface ICreateSpecificationService {
    execute({ name, description }: ICreateSpecificationDTO): Promise<void>;
}

export { ICreateSpecificationService }