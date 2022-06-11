import prismaClient from "../../prisma";

class DetailUserService {
    async execute(CODIGO: string){

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