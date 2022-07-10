import prismaClient from "../../prisma";
class ListMaquinaService {
    async execute() {

        const maquina = await prismaClient.maquina.findMany({
            select: {
                CODIGO: true,
                DESCRICAO: true,
            }
        })

        return maquina;

    }
}

export { ListMaquinaService }