import { Request, Response } from 'express'
import { ListReceberService } from '../../services/receber/ListReceberService'

class ListReceberController{
    async handle(req: Request, res: Response){
        const listReceberService = new ListReceberService();

        const receber = await listReceberService.execute();

        return res.json(receber);

    }
}

export { ListReceberController }