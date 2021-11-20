import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';

class InMemoryCategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  private static INSTANCE: InMemoryCategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): InMemoryCategoriesRepository {
    if (!InMemoryCategoriesRepository.INSTANCE) {
      InMemoryCategoriesRepository.INSTANCE =
        new InMemoryCategoriesRepository();
    }
    return InMemoryCategoriesRepository.INSTANCE;
  }

  findAll(): Category[] {
    return this.categories;
  }

}

export { InMemoryCategoriesRepository };
