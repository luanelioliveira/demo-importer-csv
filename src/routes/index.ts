import { Router } from 'express';

import { route as categoriesRoutes } from './categories.routes';

const router = Router();

router.use('/categories', categoriesRoutes);

export { router as routes };
