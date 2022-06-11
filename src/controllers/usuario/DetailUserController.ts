import { Request, Response } from 'express'
import { DetailUserService } from '../../services/usuario/DetailUserService'

class DetailUserController {
    async handle(req: Request, res: Response){

        const CODIGO = req.CODIGO;

        const detailUserService = new DetailUserService();

        const usuario = await detailUserService.execute(CODIGO);

        return res.json(usuario);

    }
}

export { DetailUserController }