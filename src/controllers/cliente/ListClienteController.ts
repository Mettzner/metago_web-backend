import { Request, Response } from 'express'
import { ListClienteService } from '../../services/cliente/ListClienteService'

class ListClienteController {
    async handle(req: Request, res: Response) {
        const listClienteService = new ListClienteService();

        const cliente = await listClienteService.execute();

        return res.json(cliente);

    }
}

export { ListClienteController }