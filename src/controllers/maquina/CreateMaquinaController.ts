import { Request, Response } from 'express'
import { CreateMaquinaService } from '../../services/maquina/CreateMaquinaService'

class CreateMaquinaController {
    async handle(req: Request, res: Response) {
        const { CODIGO, DESCRICAO } = req.body;

        const createMaquinaService = new CreateMaquinaService

        const maquina = await createMaquinaService.execute({
            CODIGO,
            DESCRICAO,
        });

        return res.json(maquina);

    }
}

export { CreateMaquinaController }