import { Request, Response } from "express";
import { AuthUserService } from "../../services/usuario/AuthUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { USUARIO, SENHA, NIVEL_ACESSO } = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({
      USUARIO,
      SENHA,
      NIVEL_ACESSO,
    });

    return res.json(auth);
  }
}

export { AuthUserController };
