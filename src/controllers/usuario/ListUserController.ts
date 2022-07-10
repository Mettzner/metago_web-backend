import { Request, Response } from 'express'
import { ListUserService } from '../../services/usuario/ListUserService'

class ListUserController {
    async handle(req: Request, res: Response) {
        const listUserService = new ListUserService();

        const usuario = await listUserService.execute();

        return res.json(usuario);

    }
}

export { ListUserController }