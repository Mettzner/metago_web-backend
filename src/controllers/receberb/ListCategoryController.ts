import { Request, Response } from 'express'
import { ListReceberBService } from '../../services/receberb/ListReceberBService'

class ListReceberBController{
    async handle(req: Request, res: Response){
        const listReceberBService = new ListReceberBService();

        const receberb = await listReceberBService.execute();

        return res.json(receberb);

    }
}

export { ListReceberBController }