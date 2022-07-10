import { Router } from 'express';


// CLIENTE
import { CreateClienteController } from './controllers/cliente/CreateClienteController'
import { ListClienteController } from './controllers/cliente/ListClienteController'
import { DeleteClienteController } from './controllers/cliente/DeleteClienteController'
import { DetailClienteController } from './controllers/cliente/DetailClienteController'
import { UpdateClienteController } from './controllers/cliente/UpdateClienteController'
// MAQUINA
import { CreateMaquinaController } from './controllers/maquina/CreateMaquinaController'
import { ListMaquinaController } from './controllers/maquina/ListMaquinaController'
import { DetailMaquinaController } from './controllers/maquina/DetailMaquinaController'
import { DeleteMaquinaController } from './controllers/maquina/DeleteMaquinaController'
// PRODUTO
import { CreateProdutoController } from './controllers/produto/CreateProdutoController'
import { ListProdutoController } from './controllers/produto/ListProdutoController'
import { DetailProdutoController } from './controllers/produto/DetailProdutoController'
// PAGAR
import { CreatePagarController } from './controllers/pagar/CreatePagarController'
import { ListPagarController } from './controllers/pagar/ListPagarController'
import { DetailPagarController } from './controllers/pagar/DetailPagarController'
// PAGARB
import { CreatePagarBController } from './controllers/pagarb/CreatePagarBController'
import { ListPagarBController } from './controllers/pagarb/ListPagarBController'
// RECEBER
import { CreateReceberController } from './controllers/receber/CreateReceberController'
import { ListReceberController } from './controllers/receber/ListReceberController'
import { DetailReceberController } from './controllers/receber/DetailReceberController'
// RECEBERB
import { CreateReceberBController } from './controllers/receberb/CreateReceberBController'
import { ListReceberBController } from './controllers/receberb/ListReceberBController'
// FUNCIONARIO
import { DetailFuncionarioController } from './controllers/funcionario/DetailFuncionarioController'
import { CreateFuncionarioController } from './controllers/funcionario/CreateFuncionarioController'
import { ListFuncionarioController } from './controllers/funcionario/ListFuncionarioController'
// SERVICO
import { CreateServicoController } from './controllers/servicos/CreateServicoController'
import { ListServicoController } from './controllers/servicos/ListServicoController'
import { DeleteServicoController } from './controllers/servicos/DeleteServicoController'
import { DetailServicoController } from './controllers/servicos/DetailServicoController'
// USUARIO
import { CreateUserController } from './controllers/usuario/CreateUserController'
import { AuthUserController } from './controllers/usuario/AuthUserController'
import { DetailUserController } from './controllers/usuario/DetailUserController'
import { ListUserController } from './controllers/usuario/ListUserController';

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router();
//Criação da rota e inserido json para retornar mensagem
// router.get('/teste', (req: Request, res: Response) => {
//     return res.json({ nome: "Sujeito Pizza" })
// throw new Error('Erro ao fazer esta requisção')
// })


//--ROTAS CLIENTE--
router.post('/cliente/create/', isAuthenticated, new CreateClienteController().handle)
router.get('/cliente/listagem', isAuthenticated, new ListClienteController().handle)
router.delete('/cliente/delete', isAuthenticated, new DeleteClienteController().handle)
router.get('/cliente/detalhes/:ID_CLIENTE', isAuthenticated, new DetailClienteController().handle)
router.put('/cliente/altera/:ID_CLIENTE', isAuthenticated, new UpdateClienteController().handle)

//--ROTAS MAQUINA--
router.post('/maquina/create', isAuthenticated, new CreateMaquinaController().handle)
router.delete('/maquina/delete', isAuthenticated, new DeleteMaquinaController().handle)
router.get('/maquina/listagem', isAuthenticated, new ListMaquinaController().handle)
router.get('/maquina/detalhes/:ID_MAQUINA', isAuthenticated, new DetailMaquinaController().handle)

//--ROTAS PRODUTO--
router.post('/produto/create', isAuthenticated, new CreateProdutoController().handle)
router.get('/produto/listagem', isAuthenticated, new ListProdutoController().handle)
router.get('/produto/detalhes/:ID_PRODUTO', isAuthenticated, new DetailProdutoController().handle)

//--ROTAS PAGAR--
router.post('/pagar/create', isAuthenticated, new CreatePagarController().handle)
router.get('/pagar/listagem', isAuthenticated, new ListPagarController().handle)
router.get('/pagar/detalhes/:ID_PAGAR', isAuthenticated, new DetailPagarController().handle)

//--ROTAS PAGARB--
router.post('/pagarb', isAuthenticated, new CreatePagarBController().handle)
router.get('/pagarb', isAuthenticated, new ListPagarBController().handle)

//--ROTAS RECEBER--
router.post('/receber/create', isAuthenticated, new CreateReceberController().handle)
router.get('/receber/listagem', isAuthenticated, new ListReceberController().handle)
router.get('/receber/detalhes/:ID_RECEBER', isAuthenticated, new DetailReceberController().handle)

//--ROTAS RECEBERB--
router.post('/receberb', isAuthenticated, new CreateReceberBController().handle)
router.get('/receberb', isAuthenticated, new ListReceberBController().handle)

//--ROTAS FUNCIONARIO--
router.post('/funcionario/create', isAuthenticated, new CreateFuncionarioController().handle)
router.get('/funcionario/listagem', isAuthenticated, new ListFuncionarioController().handle)
router.get('/funcionario/detalhes/:ID_FUNCIONARIO', isAuthenticated, new DetailFuncionarioController().handle)

//--ROTAS SERVICOS--
router.post('/servico/create', isAuthenticated, new CreateServicoController().handle)
router.get('/servico/listagem', isAuthenticated, new ListServicoController().handle)
router.delete('/servico/delete', isAuthenticated, new DeleteServicoController().handle)
router.get('/servico/detalhes/:ID_SERVICO', isAuthenticated, new DetailServicoController().handle)

//-- ROTAS USER --
router.post('/cadusuario', new CreateUserController().handle)
router.post('/sessao', new AuthUserController().handle)
router.get('/usuario/listagem', new ListUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

export { router };