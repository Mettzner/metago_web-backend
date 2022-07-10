import prismaClient from "../../prisma";


class ListUserService {
    async execute() {

        const usuario = await prismaClient.usuarios.findMany({
            select: {
                CODIGO: true,
                NOME: true,
                USUARIO: true,
                NIVEL_ACESSO: true,
            },
            orderBy: {
                CODIGO: 'desc',
            }
        })

        return usuario;

    }
}

export { ListUserService }