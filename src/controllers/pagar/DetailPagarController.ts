import { Request, Response } from 'express'
import { DetailPagarService } from '../../services/pagar/DetailPagarService'

class DetailPagarController {
    async handle(req: Request, res: Response) {
        const ID_PAGAR = req.params.ID_PAGAR;

        const detailPagarService = new DetailPagarService();

        const pagar = await detailPagarService.execute({
            ID_PAGAR
        }
        );

        return res.json(pagar);

    }
}

export { DetailPagarController }