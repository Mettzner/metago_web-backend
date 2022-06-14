import { Request, Response } from 'express'
import { ListEntidadeService } from '../../services/entidade/ListEntidadeService'

class ListEntidadeController{
    async handle(req: Request, res: Response){
        const listEntidadeService = new ListEntidadeService();

        const entidade = await listEntidadeService.execute();

        return res.json(entidade);

    }
}

export { ListEntidadeController }