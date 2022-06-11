import prismaClient from "../../prisma";
class ListPagarService{
    async execute(){

        const pagar = await prismaClient.pagar.findMany({
            select: {
                NUMERO: true,
                CODCLI: true,
                CODREP: true,
                PARCELA: true,
                VALOR_TOTAL: true,
            }
        })

        return pagar;

    }
}

export { ListPagarService }