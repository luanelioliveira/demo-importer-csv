import { InMemoryCategoriesRepository } from '../../repositories/impl/InMemoryCategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesCategory = InMemoryCategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesCategory);

const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController };
