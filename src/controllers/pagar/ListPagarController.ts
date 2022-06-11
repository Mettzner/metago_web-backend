import { Request, Response } from 'express'
import { ListPagarService } from '../../services/pagar/ListPagarService'

class ListPagarController{
    async handle(req: Request, res: Response){
        const listPagarService = new ListPagarService();

        const pagar = await listPagarService.execute();

        return res.json(pagar);

    }
}

export { ListPagarController }