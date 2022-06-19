import prismaClient from "../../prisma";

class DetailUserService {
    async execute(CODIGO: number){

        const usuario = await prismaClient.usuarios.findFirst({
            where:{
                CODIGO: CODIGO
            },
            select:{
                CODIGO: true,
                NOME: true,
                USUARIO: true
            }
        })

    return usuario;
    }
}

export { DetailUserService }