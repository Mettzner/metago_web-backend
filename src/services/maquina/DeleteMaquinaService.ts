import prismaClient from "../../prisma";

interface MaquinaRequest{
    ID_MAQUINA: string;
}

class DeleteMaquinaService{
    async execute({ ID_MAQUINA }: MaquinaRequest) {
        
        const order = await prismaClient.maquina.delete({
            where:{
                ID_MAQUINA: ID_MAQUINA,
            }
        })

        return order;

    }
}

export { DeleteMaquinaService }