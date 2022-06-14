import { Router } from 'express';
import multer from 'multer'


// ENTIDADE
import { CreateEntidadeController } from './controllers/entidade/CreateEntidadeController'
import { ListEntidadeController } from './controllers/entidade/ListEntidadeController'
// MAQUINA
import { CreateMaquinaController } from './controllers/maquina/CreateMaquinaController'
import { ListMaquinaController } from './controllers/maquina/ListMaquinaController'
// PRODUTO
import { CreateProdutoController } from './controllers/produto/CreateProdutoController'
import { ListProdutoController } from './controllers/produto/ListProdutoController'
// PAGAR
import { CreatePagarController } from './controllers/pagar/CreatePagarController'
import { ListPagarController } from './controllers/pagar/ListPagarController'
// PAGARB
import { CreatePagarBController } from './controllers/pagarb/CreatePagarBController'
import { ListPagarBController } from './controllers/pagarb/ListPagarBController'
// RECEBER
import { CreateReceberController } from './controllers/receber/CreateReceberController'
import { ListReceberController } from './controllers/receber/ListReceberController'
// RECEBERB
import { CreateReceberBController } from './controllers/receberb/CreateReceberBController'
import { ListReceberBController } from './controllers/receberb/ListReceberBController'
// REPRESEN
import { CreateRepresenController } from './controllers/represen/CreateRepresenController'
import { ListRepresenController } from './controllers/represen/ListRepresenController'
// USUARIO
import { CreateUserController } from './controllers/usuario/CreateUserController'
import { AuthUserController } from './controllers/usuario/AuthUserController'
import { DetailUserController } from './controllers/usuario/DetailUserController'


import uploadConfig from './config/Multer'
import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//Criação da rota e inserido json para retornar mensagem
// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({ nome: "Sujeito Pizza" })
    // throw new Error('Erro ao fazer esta requisção')
// })


//--ROTAS ENTIDADE--
router.post('/entidade', isAuthenticated, new CreateEntidadeController().handle)
router.get('/entidade', isAuthenticated, new ListEntidadeController().handle)

//--ROTAS MAQUINA--
router.post('/maquina', isAuthenticated, new CreateMaquinaController().handle)
router.get('/maquina', isAuthenticated, new ListMaquinaController().handle)

//--ROTAS PRODUTO--
router.post('/produto', isAuthenticated, upload.single('file'), new CreateProdutoController().handle)
router.get('/produto', isAuthenticated, new ListProdutoController().handle)

//--ROTAS PAGAR--
router.post('/pagar', isAuthenticated, new CreatePagarController().handle)
router.get('/pagar', isAuthenticated, new ListPagarController().handle)

//--ROTAS PAGARB--
router.post('/pagarb', isAuthenticated, new CreatePagarBController().handle)
router.get('/pagarb', isAuthenticated, new ListPagarBController().handle)

//--ROTAS RECEBER--
router.post('/receber', isAuthenticated, new CreateReceberController().handle)
router.get('/receber', isAuthenticated, new ListReceberController().handle)

//--ROTAS RECEBERB--
router.post('/receberb', isAuthenticated, new CreateReceberBController().handle)
router.get('/receberb', isAuthenticated, new ListReceberBController().handle)

//--ROTAS REPRESEN--
router.post('/represen', isAuthenticated, new CreateRepresenController().handle)
router.get('/represen', isAuthenticated, new ListRepresenController().handle)

//-- ROTAS USER --
router.post('/cadusuario', new CreateUserController().handle)
router.post('/sessao', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

export { router };