import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    USUARIO: string;
    SENHA: string;
    NIVEL_ACESSO: number;
}

class AuthUserService {
    async execute({ USUARIO, SENHA }: AuthRequest) {
        console.log(USUARIO);
        //verificar se o email existe
        const usuario = await prismaClient.usuarios.findFirst({
            where: {
                USUARIO: USUARIO
            }
        })

        if (!usuario) {
            throw new Error('usuario/senha incorretos')
        }

        //verificar se a senha enviada esta correta
        const passwordMatch = await compare(SENHA, usuario.SENHA)

        if (!passwordMatch) {
            throw new Error('usuario/senha incorretos')
        }

        //gerar um token JWT e desolver os dados do usuario como id, name, email

        //Se deu tudo certo, gerar um token para o usuário

        const token = sign(
            {
                USUARIO: usuario.USUARIO,
                SENHA: usuario.SENHA,
                NIVEL_ACESSO: usuario.NIVEL_ACESSO
            },
            process.env.JWT_SECRET,
            {
                subject: usuario.ID_USUARIO,
                expiresIn: '30d'
            }
        )

        return {
            ID_USUARIO: usuario.ID_USUARIO,
            NOME: usuario.NOME,
            USUARIO: usuario.USUARIO,
            NIVEL_ACESSO: usuario.NIVEL_ACESSO,
            token: token
        }
    }
}

export { AuthUserService }