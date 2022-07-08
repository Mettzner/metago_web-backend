import { Request, Response } from 'express'
import { DetailClienteService } from '../../services/cliente/DetailClienteService'

class DetailClienteController {
    async handle(req: Request, res: Response) {
        const ID_CLIENTE = req.params.ID_CLIENTE;

        const detailClienteService = new DetailClienteService();

        const cliente = await detailClienteService.execute({
            ID_CLIENTE
        }
        );

        return res.json(cliente);

    }
}

export { DetailClienteController }