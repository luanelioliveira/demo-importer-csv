import { Router } from 'express';

const route = Router();


route.get('/', (request, response) => {
  return response.json({ status: "ok" })
});


export { route };
