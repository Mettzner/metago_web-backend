import { Request, Response } from 'express'
import { ListServicoService } from '../../services/servicos/ListServicoService'

class ListServicoController {
    async handle(req: Request, res: Response) {
        const listServicoService = new ListServicoService();

        const servico = await listServicoService.execute();

        return res.json(servico);

    }
}

export { ListServicoController }