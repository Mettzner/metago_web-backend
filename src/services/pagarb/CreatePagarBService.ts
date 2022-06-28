import prismaClient from "../../prisma";

interface PagarBRequest{
    NUMERO: number;
    ID_CLIENTE: string;
    ID_FUNCIONARIO: string;
    PARCELA: string;
    VALOR_TOTAL: number;
    VALOR_PAGO: number;
}

class CreatePagarBService{
    async execute({ NUMERO, ID_CLIENTE, ID_FUNCIONARIO, PARCELA, VALOR_TOTAL, VALOR_PAGO }: PagarBRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('Nome inválido')
        // }

        const pagarb = await prismaClient.pagarB.create({
            data: {
                NUMERO: NUMERO,
                ID_CLIENTE: ID_CLIENTE,
                ID_FUNCIONARIO: ID_FUNCIONARIO,
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