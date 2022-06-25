import { Request, Response } from 'express'
import { ListFuncionarioService } from '../../services/funcionario/ListFuncionarioService'

class ListFuncionarioController{
    async handle(req: Request, res: Response){
        const listFuncionarioService = new ListFuncionarioService();

        const funcionario = await listFuncionarioService.execute();

        return res.json(funcionario);

    }
}

export { ListFuncionarioController }