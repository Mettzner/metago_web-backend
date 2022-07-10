import prismaClient from "../../prisma";

interface DetailMaquina {
    ID_MAQUINA: string;
}

class DetailMaquinaService {
    async execute({ ID_MAQUINA }: DetailMaquina) {

        const maquina = await prismaClient.maquina.findMany({
            where: {
                ID_MAQUINA: ID_MAQUINA
            },
            select: {
                DESCRICAO: true,
            }
        })

        return maquina;
    }
}

export { DetailMaquinaService }