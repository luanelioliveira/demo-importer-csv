import { InMemoryCategoriesRepository } from '../../repositories/impl/InMemoryCategoriesRepository';
import { ImportCategoriesController } from './ImportCategoriesController';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

const inMemoryCategoriesRepository = InMemoryCategoriesRepository.getInstance();

const importCategoriesUseCase = new ImportCategoriesUseCase(
  inMemoryCategoriesRepository,
);

const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase,
);

export { importCategoriesController };
