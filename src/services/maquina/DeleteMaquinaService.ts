import prismaClient from "../../prisma";

interface MaquinaRequest {
    ID_MAQUINA: string;
}

class DeleteMaquinaService {
    async execute({ ID_MAQUINA }: MaquinaRequest) {

        const maquina = await prismaClient.maquina.delete({
            where: {
                ID_MAQUINA: ID_MAQUINA,
            }
        })

        return maquina;

    }
}

export { DeleteMaquinaService }