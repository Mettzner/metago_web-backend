import { Request, Response } from 'express'
import { CreatePagarBService } from '../../services/pagarb/CreatePagarBService'

class CreatePagarBController{
    async handle (req: Request, res:Response){
        const { NUMERO, CODCLI, CODREP, PARCELA, VALOR_TOTAL, VALOR_PAGO } = req.body;

        const createPagarBService = new CreatePagarBService

        const pagarb = await createPagarBService.execute({
            NUMERO,
            CODCLI,
            CODREP,
            PARCELA,
            VALOR_TOTAL,
            VALOR_PAGO,
        });

        return res.json(pagarb);

    }
}

export { CreatePagarBController }