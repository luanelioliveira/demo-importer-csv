import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private repository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.repository.findAll();
  }
}

export { ListCategoriesUseCase };
