import { Request, Response } from 'express'
import { DeleteServicoService } from '../../services/servicos/DeleteServicoService'


class DeleteServicoController {
    async handle(req: Request, res: Response) {
        const ID_SERVICO = req.query.ID_SERVICO as string;


        const deleteServico = new DeleteServicoService();

        const servico = await deleteServico.execute({
            ID_SERVICO
        });

        return res.json(servico);

    }
}

export { DeleteServicoController }