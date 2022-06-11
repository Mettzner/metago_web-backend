import { Request, Response } from 'express'
import { ListPagarBService } from '../../services/pagarb/ListPagarBService'

class ListPagarBController{
    async handle(req: Request, res: Response){
        const listPagarBService = new ListPagarBService();

        const category = await listPagarBService.execute();

        return res.json(category);

    }
}

export { ListPagarBController }