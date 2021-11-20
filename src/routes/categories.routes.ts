import { Router } from 'express';
import multer from 'multer';

import { importCategoriesController } from '../modules/cars/usecases/importCategories';
import { listCategoriesController } from '../modules/cars/usecases/listCategories';

const route = Router();

const upload = multer({
  dest: './tmp',
});

route.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

route.post('/import', upload.single('file'), (request, response) => {
  return importCategoriesController.handle(request, response);
});

export { route };
