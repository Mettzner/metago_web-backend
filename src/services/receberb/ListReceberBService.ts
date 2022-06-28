import prismaClient from "../../prisma";
class ListReceberBService{
    async execute(){

        const receberb = await prismaClient.receberB.findMany({
            select: {
                NUMERO: true,
                ID_CLIENTE: true,
                ID_FUNCIONARIO: true,
                PARCELA: true,
                VALOR_PAGO: true,
                VALOR_PARCELA: true,
            }
        })

        return receberb;

    }
}

export { ListReceberBService }