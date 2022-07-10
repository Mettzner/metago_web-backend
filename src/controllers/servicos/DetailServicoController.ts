import { Request, Response } from 'express'
import { DetailServicoService } from '../../services/servicos/DetailServicoService'

class DetailServicoController {
    async handle(req: Request, res: Response) {
        const ID_SERVICO = req.params.ID_SERVICO;

        const detailServicoService = new DetailServicoService();

        const servico = await detailServicoService.execute({
            ID_SERVICO
        }
        );

        return res.json(servico);

    }
}

export { DetailServicoController }