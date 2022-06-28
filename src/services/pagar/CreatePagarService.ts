import prismaClient from "../../prisma";

interface PagarRequest{
    NUMERO: number;
    ID_CLIENTE: string;
    ID_FUNCIONARIO: string;
    PARCELA: string;
    VALOR_TOTAL: number;
    DT_VENCIMENTO: Date;
}

class CreatePagarService{
    async execute({ NUMERO, ID_CLIENTE, ID_FUNCIONARIO, PARCELA, VALOR_TOTAL, DT_VENCIMENTO }: PagarRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('Nome inválido')
        // }

        const pagar = await prismaClient.pagar.create({
            data: {
                NUMERO: NUMERO,
                ID_CLIENTE: ID_CLIENTE,
                ID_FUNCIONARIO: ID_FUNCIONARIO,
                PARCELA: PARCELA,
                VALOR_TOTAL: VALOR_TOTAL,
                DT_VENCIMENTO: DT_VENCIMENTO,
            },
            select:{
                NUMERO: true,
                ID_CLIENTE :true,
            }
        })

        return pagar

    }
}

export { CreatePagarService }