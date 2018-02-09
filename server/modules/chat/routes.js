import { Router } from 'express';
import * as chatModuleController from './controller';

const routes = new Router();

routes.get('/v1/chat', chatModuleController.chatRoute);

export default routes;
