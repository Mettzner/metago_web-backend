import { Request, Response } from 'express'
import { DetailMaquinaService } from '../../services/maquina/DetailMaquinaService'

class DetailMaquinaController {
    async handle(req: Request, res: Response) {
        const ID_MAQUINA = req.params.ID_MAQUINA;

        const detailMaquinaService = new DetailMaquinaService();

        const maquina = await detailMaquinaService.execute({
            ID_MAQUINA
        }
        );

        return res.json(maquina);

    }
}

export { DetailMaquinaController }