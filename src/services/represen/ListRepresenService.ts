import prismaClient from "../../prisma";
class ListRepresenService{
    async execute(){

        const represen = await prismaClient.represen.findMany({
            select: {
                CODREP: true,
                NOME: true,
            }
        })

        return represen;

    }
}

export { ListRepresenService }