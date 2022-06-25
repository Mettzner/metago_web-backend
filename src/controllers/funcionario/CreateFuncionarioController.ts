import { Request, Response } from 'express'
import { CreateFuncionarioService } from '../../services/funcionario/CreateFuncionarioService'

class CreateFuncionarioController{
    async handle (req: Request, res:Response){
        const { CODFUN, NOME } = req.body;

        const createFuncionarioService = new CreateFuncionarioService

        const funcionario = await createFuncionarioService.execute({
            CODFUN,
            NOME,
        });

        return res.json(funcionario);

    }
}

export { CreateFuncionarioController }