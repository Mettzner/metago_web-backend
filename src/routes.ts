import { Router } from 'express';
import multer from 'multer'

import { CreateUserController } from './controllers/usuario/CreateUserController'
import { AuthUserController } from './controllers/usuario/AuthUserController'
import { DetailUserController } from './controllers/usuario/DetailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'
import { CreateProdutoController } from './controllers/produto/CreateProdutoController'
// import { ListByCategoryController } from './controllers/produto/ListByCategoryController'
import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'
import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { SendOrderController } from './controllers/order/SendOrderController'
import { ListOrdersController } from './controllers/order/ListOrdersController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'


import uploadConfig from './config/Multer'

import { isAuthenticated } from './middlewares/isAuthenticated'
const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//Criação da rota e inserido json para retornar mensagem
// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({ nome: "Sujeito Pizza" })
    // throw new Error('Erro ao fazer esta requisção')
// })

//-- ROTAS USER --
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//--ROTAS CATEGORY--

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

//--ROTAS PRODUTO--
router.post('/produto', isAuthenticated, upload.single('file'), new CreateProdutoController().handle)
// router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//--ROTAS ORDER--
router.post('/order', isAuthenticated, new CreateOrderController().handle);

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrdersController().handle)

router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export { router };