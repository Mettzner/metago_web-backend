import { Request, Response } from 'express'
import { ListMaquinaService } from '../../services/maquina/ListMaquinaService'

class ListMaquinaController{
    async handle(req: Request, res: Response){
        const listMaquinaService = new ListMaquinaService();

        const maquina = await listMaquinaService.execute();

        return res.json(maquina);

    }
}

export { ListMaquinaController }