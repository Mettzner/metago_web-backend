import prismaClient from "../../prisma";

interface DetailReceber {
    ID_RECEBER: string;
}

class DetailReceberService {
    async execute({ ID_RECEBER }: DetailReceber) {

        const receber = await prismaClient.receber.findMany({
            where: {
                ID_RECEBER: ID_RECEBER
            },
            select: {

            }
        })

        return receber;
    }
}

export { DetailReceberService }