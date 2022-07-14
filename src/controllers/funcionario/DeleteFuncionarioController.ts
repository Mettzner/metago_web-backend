import { Request, Response } from 'express'
import { DeleteFuncionarioService } from '../../services/funcionario/DeleteFuncionarioService'


class DeleteFuncionarioController {
    async handle(req: Request, res: Response) {
        const ID_FUNCIONARIO = req.query.ID_FUNCIONARIO as string;


        const deleteFuncionario = new DeleteFuncionarioService();

        const funcionario = await deleteFuncionario.execute({
            ID_FUNCIONARIO
        });

        return res.json(funcionario);

    }
}

export { DeleteFuncionarioController }