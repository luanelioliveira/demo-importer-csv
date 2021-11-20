import { Category } from '../models/Category';

interface ICategoriesRepository {
  save(category: Category);
  findAll(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository };
