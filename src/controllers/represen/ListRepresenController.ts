import { Request, Response } from 'express'
import { ListRepresenService } from '../../services/represen/ListRepresenService'

class ListRepresenController{
    async handle(req: Request, res: Response){
        const listRepresenService = new ListRepresenService();

        const represen = await listRepresenService.execute();

        return res.json(represen);

    }
}

export { ListRepresenController }