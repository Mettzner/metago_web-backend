import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    CODIGO: string;
    CODCLI: string;
    NOME: string;
    USUARIO: string;
    SENHA: string;
    NIVEL_ACESSO: number;
}

class CreateUserService{
    async execute({CODIGO, CODCLI, NOME, USUARIO, SENHA, NIVEL_ACESSO}: UserRequest){

        //verificar se ele enviou um email
        if(!USUARIO){
            throw new Error("usuario incorreto")
        }

        //Verificar se esse email já está cadastrado
        const userAlreadyExist = await prismaClient.usuarios.findFirst({
            where:{
                USUARIO: USUARIO
            }
        })

        if (userAlreadyExist){
            throw new Error('Usuário já existe')
        }

        const passwordHash = await hash(SENHA, 8)

        const usuario = await prismaClient.usuarios.create({
            data: {
                CODIGO: CODIGO,
                CODCLI: CODCLI,
                NOME: NOME,
                USUARIO: USUARIO,
                SENHA: passwordHash,
                NIVEL_ACESSO: NIVEL_ACESSO,
            },
            select: {
                CODIGO: true,
                NOME: true,
                USUARIO: true
            }
        })

        return usuario
    }
}

export { CreateUserService }