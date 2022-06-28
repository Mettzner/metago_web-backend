import prismaClient from "../../prisma";
class ListPagarBService{
    async execute(){

        const pagarb = await prismaClient.pagarB.findMany({
            select: {
                NUMERO: true,
                ID_CLIENTE: true,
                ID_FUNCIONARIO: true,
                PARCELA: true,
                VALOR_TOTAL: true,
                VALOR_PAGO: true,
            }
        })

        return pagarb;

    }
}

export { ListPagarBService }