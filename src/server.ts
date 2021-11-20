import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { routes } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333, () => console.log('Server is running on port 3333'));
