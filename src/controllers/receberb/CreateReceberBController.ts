import { Request, Response } from 'express'
import { CreateReceberBService } from '../../services/receberb/CreateReceberBService'

class CreateReceberBController{
    async handle (req: Request, res:Response){
        const { NUMERO, CODCLI, CODREP, PARCELA, VALOR_PAGO, VALOR_PARCELA } = req.body;

        const createReceberBService = new CreateReceberBService();

        const receberb = await createReceberBService.execute({
            NUMERO,
            CODCLI,
            CODREP,
            PARCELA,
            VALOR_PAGO,
            VALOR_PARCELA,
        });

        return res.json(receberb);

    }
}

export { CreateReceberBController }