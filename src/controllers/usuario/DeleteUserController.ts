import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/usuario/DeleteUserService'


class DeleteUserController {
    async handle(req: Request, res: Response) {
        const ID_USUARIO = req.query.ID_USUARIO as string;


        const deleteUsuario = new DeleteUserService();

        const usuario = await deleteUsuario.execute({
            ID_USUARIO
        });

        return res.json(usuario);

    }
}

export { DeleteUserController }