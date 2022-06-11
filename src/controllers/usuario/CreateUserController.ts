import { Request, response, Response } from 'express'
import { CreateUserService } from '../../services/usuario/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){

        const {CODIGO, CODCLI, NOME, USUARIO, SENHA, NIVEL_ACESSO } = req.body;

        const createUserService = new CreateUserService();

        const usuario = await createUserService.execute({
            CODIGO,
            CODCLI,
            NOME,
            USUARIO,
            SENHA,
            NIVEL_ACESSO
        });

        return res.json(usuario)
    }
}

export { CreateUserController }