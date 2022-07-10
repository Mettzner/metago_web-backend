import { Request, Response } from 'express'
import { DetailFuncionarioService } from '../../services/funcionario/DetailFuncionarioService'

class DetailFuncionarioController {
    async handle(req: Request, res: Response) {
        const ID_FUNCIONARIO = req.params.ID_FUNCIONARIO;

        const detailFuncService = new DetailFuncionarioService();

        const funcionario = await detailFuncService.execute({
            ID_FUNCIONARIO
        }
        );

        return res.json(funcionario);

    }
}

export { DetailFuncionarioController }