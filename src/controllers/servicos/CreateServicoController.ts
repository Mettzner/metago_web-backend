import { Request, Response } from 'express'
import { CreateServicoService } from '../../services/servicos/CreateServicoService'

class CreateServicoController {
    async handle(req: Request, res: Response) {
        const { ID_CLIENTE, NOME_CLI, ID_FUNCIONARIO, NOME_FUN, ID_MAQUINA, ID_PRODUTO, QTDE_HORAS, VALOR } = req.body;

        const createServicoService = new CreateServicoService

        const servico = await createServicoService.execute({
            ID_CLIENTE,
            NOME_CLI,
            ID_FUNCIONARIO,
            NOME_FUN,
            ID_MAQUINA,
            ID_PRODUTO,
            QTDE_HORAS,
            VALOR,
        });

        return res.json(servico);

    }
}

export { CreateServicoController }