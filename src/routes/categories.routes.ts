import { Router } from 'express';

import { listCategoriesController } from '../modules/cars/usecases/listCategories';

const route = Router();


route.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { route };
