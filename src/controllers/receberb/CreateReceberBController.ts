import { Request, Response } from 'express'
import { CreateReceberBService } from '../../services/receberb/CreateReceberBService'

class CreateReceberBController{
    async handle (req: Request, res:Response){
        const { NUMERO, ID_CLIENTE, ID_FUNCIONARIO, PARCELA, VALOR_PAGO, VALOR_PARCELA } = req.body;

        const createReceberBService = new CreateReceberBService();

        const receberb = await createReceberBService.execute({
            NUMERO,
            ID_CLIENTE,
            ID_FUNCIONARIO,
            PARCELA,
            VALOR_PAGO,
            VALOR_PARCELA,
        });

        return res.json(receberb);

    }
}

export { CreateReceberBController }