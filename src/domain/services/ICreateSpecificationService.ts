import ICreatedSpecificationDTO from "../dtos/specification/ICreatedSpecificationDTO";
import ICreateSpecificationDTO from "../dtos/specification/IAddSpecificationDTO";

export default interface ICreateSpecificationService {
    execute({ name, description }: ICreateSpecificationDTO): Promise<ICreatedSpecificationDTO>;
}