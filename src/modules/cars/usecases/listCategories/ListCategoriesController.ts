import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategories: ListCategoriesUseCase) {}

  handle(request, response) {
    return response.json(this.listCategories.execute());
  }
}

export { ListCategoriesController };
