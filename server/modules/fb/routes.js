import { Router } from 'express';
import * as fbModuleController from './controller';

const routes = new Router();

routes.get('/webhook/', fbModuleController.webhook.get);
routes.post('/webhook/', fbModuleController.webhook.post);

export default routes;
