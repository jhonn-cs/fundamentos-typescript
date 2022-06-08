import IAddSpecificationDTO from "../dtos/specification/IAddSpecificationDTO";
import { Specification } from "../entities/Specification";

export default interface ISpecificationRepository {
    create({ name, description }: IAddSpecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
}