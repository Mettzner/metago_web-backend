import prismaClient from "../../prisma";

interface ReceberBRequest{
    NUMERO: number;
    CODCLI: number;
    CODFUN: number;
    PARCELA: string;
    VALOR_PAGO: number;
    VALOR_PARCELA: number;
}

class CreateReceberBService{
    async execute({ NUMERO, CODCLI, CODFUN, PARCELA, VALOR_PAGO, VALOR_PARCELA }: ReceberBRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('Nome inválido')
        // }

        const receber = await prismaClient.receberB.create({
            data: {
               NUMERO: NUMERO,
               CODCLI: CODCLI,
               CODFUN: CODFUN,
               PARCELA: PARCELA,
               VALOR_PAGO: VALOR_PAGO,
               VALOR_PARCELA: VALOR_PARCELA,
            },
            select:{
                NUMERO: true,
                CODCLI:true,
                CODFUN:true,
                PARCELA:true,
                VALOR_PAGO:true,
                VALOR_PARCELA:true,
            }
        })

        return receber

    }
}

export { CreateReceberBService }