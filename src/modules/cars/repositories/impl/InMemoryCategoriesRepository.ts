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

  save(category: Category) {
    const index = this.categories.findIndex(cat => cat.id === category.id);
    if (index < 0) {
      this.categories.push(category);
    } else {
      this.categories[index] = category;
    }
  }

  findAll(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    return this.categories.find(category => category.name === name);
  }
}

export { InMemoryCategoriesRepository };
