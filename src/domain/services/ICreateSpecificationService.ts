import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";

interface ICreateSpecificationService {
    execute({ name, description }: ICreateSpecificationDTO);
}

export { ICreateSpecificationService }