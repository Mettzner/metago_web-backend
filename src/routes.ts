import { Router } from 'express';
import multer from 'multer'


// ENTIDADE
import { CreateClienteController } from './controllers/cliente/CreateClienteController'
import { ListClienteController } from './controllers/cliente/ListClienteController'
import { DeleteClienteController } from './controllers/cliente/DeleteClienteController'
import { DetailClienteController } from './controllers/cliente/DetailClienteController'
// MAQUINA
import { CreateMaquinaController } from './controllers/maquina/CreateMaquinaController'
import { ListMaquinaController } from './controllers/maquina/ListMaquinaController'
import { DeleteMaquinaController } from './controllers/maquina/DeleteMaquinaController'
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
// FUNCIONARIO
import { CreateFuncionarioController } from './controllers/funcionario/CreateFuncionarioController'
import { ListFuncionarioController } from './controllers/funcionario/ListFuncionarioController'
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


//--ROTAS CLIENTE--
router.post('/cliente', isAuthenticated, new CreateClienteController().handle)
router.get('/cliente', isAuthenticated, new ListClienteController().handle)
router.delete('/cliente', isAuthenticated, new DeleteClienteController().handle)
router.get('/editcliente/:ID_CLIENTE', isAuthenticated, new DetailClienteController().handle)

//--ROTAS MAQUINA--
router.post('/cadmaquina', isAuthenticated, new CreateMaquinaController().handle)
router.get('/cadmaquina', isAuthenticated, new ListMaquinaController().handle)
router.delete('/cadmaquina', isAuthenticated, new DeleteMaquinaController().handle)

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

//--ROTAS FUNCIONARIO--
router.post('/funcionario', isAuthenticated, new CreateFuncionarioController().handle)
router.get('/funcionario', isAuthenticated, new ListFuncionarioController().handle)

//-- ROTAS USER --
router.post('/cadusuario', new CreateUserController().handle)
router.post('/sessao', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

export { router };