import prismaClient from "../../prisma";

interface ReceberRequest{
        NUMERO       : number;
        CODCLI       : number;
        CODFUN       : number;
        VALOR_TOTAL  : number;
        PARCELA      : string;
        VALOR_PARCELA: number;
}

class CreateReceberService{
    async execute({ NUMERO, CODCLI, CODFUN, VALOR_TOTAL, PARCELA, VALOR_PARCELA }: ReceberRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('NUMERO inválido')
        // }

        const receber = await prismaClient.receber.create({
            data: {
                NUMERO: NUMERO,
                CODCLI: CODCLI,  
                CODFUN: CODFUN,     
                VALOR_TOTAL: VALOR_TOTAL,
                PARCELA: PARCELA,   
                VALOR_PARCELA: VALOR_PARCELA,
            },
            select:{
                NUMERO: true,
                CODCLI:true,
            }
        })

        return receber

    }
}

export { CreateReceberService }