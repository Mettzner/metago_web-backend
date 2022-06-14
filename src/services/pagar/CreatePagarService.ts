import prismaClient from "../../prisma";

interface PagarRequest{
    NUMERO: number;
    CODCLI: string;
    CODREP: string;
    PARCELA: string;
    VALOR_TOTAL: number;
    DT_VENCIMENTO: Date;
}

class CreatePagarService{
    async execute({ NUMERO, CODCLI, CODREP, PARCELA, VALOR_TOTAL, DT_VENCIMENTO }: PagarRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('Nome inválido')
        // }

        const pagar = await prismaClient.pagar.create({
            data: {
                NUMERO: NUMERO,
                CODCLI: CODCLI,
                CODREP: CODREP,
                PARCELA: PARCELA,
                VALOR_TOTAL: VALOR_TOTAL,
                DT_VENCIMENTO: DT_VENCIMENTO,
            },
            select:{
                NUMERO: true,
                CODCLI:true,
            }
        })

        return pagar

    }
}

export { CreatePagarService }