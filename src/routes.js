import { Router } from 'express';
import CategoriaController from './controllers/CategoriaController';
import DespesaController from './controllers/DespesaController';
import MetaController from './controllers/MetaController';
import ReceitaController from './controllers/ReceitaController';
import UserController from './controllers/UserController';

const routes = new Router();
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/meta', MetaController.index);
routes.get('/meta/user/:id', MetaController.metasPorUsuario);
routes.get('/meta/:id', MetaController.show);
routes.post('/meta/:id', MetaController.create);
routes.put('/meta/:id', MetaController.update);
routes.delete('/meta/:id', MetaController.destroy);

routes.get('/receita/', ReceitaController.index);
routes.get('/receita/user/:id', ReceitaController.receitaPorUsuario);
routes.get('/receita/:id', ReceitaController.show);
routes.post('/receita/:id', ReceitaController.create);
routes.put('/receita/:id', ReceitaController.update);
routes.delete('/receita/:id', ReceitaController.destroy);

routes.get('/categoria', CategoriaController.index);
routes.get('/categoria/:id', CategoriaController.show);
routes.post('/categoria/', CategoriaController.create);
routes.put('/categoria/:id', CategoriaController.update);
routes.delete('/categoria/:id', CategoriaController.destroy);

routes.get('/despesa', DespesaController.index);
routes.get('/despesa/user/:id', DespesaController.despesaPorUsuario);
routes.get('/despesa/:id', DespesaController.show);
routes.post('/despesa/:id/:categoria_id', DespesaController.create);
routes.put('/despesa/:id', DespesaController.update);
routes.delete('/despesa/:id', DespesaController.destroy);
export default routes;
