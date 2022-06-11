import prismaClient from "../../prisma";
class ListReceberBService{
    async execute(){

        const receberb = await prismaClient.receberB.findMany({
            select: {
                NUMERO: true,
                CODCLI: true,
                CODREP: true,
                PARCELA: true,
                VALOR_PAGO: true,
                VALOR_PARCELA: true,
            }
        })

        return receberb;

    }
}

export { ListReceberBService }