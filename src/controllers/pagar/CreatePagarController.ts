import { Request, Response } from 'express'
import { CreatePagarService } from '../../services/pagar/CreatePagarService'

class CreatePagarController {
    async handle(req: Request, res: Response) {
        const { ID_CLIENTE, ID_FUNCIONARIO, PARCELA, VALOR_TOTAL } = req.body;
        // const { NUMERO, ID_CLIENTE, ID_FUNCIONARIO, PARCELA, VALOR_TOTAL, DT_VENCIMENTO } = req.body;

        const createPagarService = new CreatePagarService

        const pagar = await createPagarService.execute({
            // NUMERO,
            ID_CLIENTE,
            ID_FUNCIONARIO,
            PARCELA,
            VALOR_TOTAL,
            // DT_VENCIMENTO,
        });

        return res.json(pagar);

    }
}

export { CreatePagarController }