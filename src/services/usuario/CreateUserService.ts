import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    NOME: string;
    USUARIO: string;
    SENHA: string;
    NIVEL_ACESSO: string;
}

class CreateUserService{
    async execute({ NOME, USUARIO, SENHA, NIVEL_ACESSO }: UserRequest){

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