import { ICreateCategoryDTO } from "../../domain/dtos/ICreateCategoryDTO";
import { Category } from "../../domain/models/Category";
import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private static CATEGORIES: Category[];
    private categories: Category[];

    constructor() {
        if (!CategoryRepository.CATEGORIES)
            CategoryRepository.CATEGORIES = [];

        this.categories = CategoryRepository.CATEGORIES;
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category(name, description);

        this.categories.push(category);
    }

    getAll(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find(x => x.name == name);
    }
}

export { CategoryRepository }