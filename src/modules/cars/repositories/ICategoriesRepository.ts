import { Category } from '../models/Category';

interface ICategoriesRepository {
  findAll(): Category[];
}

export { ICategoriesRepository };
