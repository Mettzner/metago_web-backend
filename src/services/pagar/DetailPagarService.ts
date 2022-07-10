import prismaClient from "../../prisma";

interface DetailPagar {
    ID_PAGAR: string;
}

class DetailPagarService {
    async execute({ ID_PAGAR }: DetailPagar) {

        const pagar = await prismaClient.pagar.findMany({
            where: {
                ID_PAGAR: ID_PAGAR
            },
            select: {
                NUMERO: true,
                ID_CLIENTE: true,
                ID_FUNCIONARIO: true,
                VALOR_TOTAL: true,
                PARCELA: true,
                DT_CADASTRO: true,
                DT_VENCIMENTO: true,
            }
        })

        return pagar;
    }
}

export { DetailPagarService }