import prismaClient from "../../prisma";

interface PagarBRequest{
    NUMERO: string;
    CODCLI: string;
    CODREP: string;
    PARCELA: string;
    VALOR_TOTAL: number;
    VALOR_PAGO: number;
}

class CreatePagarBService{
    async execute({ NUMERO, CODCLI, CODREP, PARCELA, VALOR_TOTAL, VALOR_PAGO }: PagarBRequest){
        
        if(NUMERO === ''){
            throw new Error('Nome inválido')
        }

        const pagarb = await prismaClient.pagarB.create({
            data: {
                NUMERO: NUMERO,
                CODCLI: CODCLI,
                CODREP: CODREP,
                PARCELA: PARCELA,
                VALOR_TOTAL: VALOR_TOTAL,
                VALOR_PAGO: VALOR_PAGO,
            },
            select:{
                NUMERO: true,
            }
        })

        return pagarb

    }
}

export { CreatePagarBService }