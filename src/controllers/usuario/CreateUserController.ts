import { Request, response, Response } from 'express'
import { CreateUserService } from '../../services/usuario/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){

        const {NOME, USUARIO, SENHA, NIVEL_ACESSO } = req.body;

        const createUserService = new CreateUserService();

        const usuario = await createUserService.execute({
            NOME,
            USUARIO,
            SENHA,
            NIVEL_ACESSO
        });

        return res.json(usuario)
    }
}

export { CreateUserController }