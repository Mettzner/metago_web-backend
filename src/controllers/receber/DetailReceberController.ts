import { Request, Response } from 'express'
import { DetailReceberService } from '../../services/receber/DetailReceberService'

class DetailReceberController {
    async handle(req: Request, res: Response) {
        const ID_RECEBER = req.params.ID_RECEBER;

        const detailReceberService = new DetailReceberService();

        const receber = await detailReceberService.execute({
            ID_RECEBER
        }
        );

        return res.json(receber);

    }
}

export { DetailReceberController }