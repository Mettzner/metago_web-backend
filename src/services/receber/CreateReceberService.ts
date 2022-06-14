import prismaClient from "../../prisma";

interface ReceberRequest{
        NUMERO       : number;
        CODCLI       : string;
        CODREP       : string;
        VALOR_TOTAL  : number;
        PARCELA      : string;
        VALOR_PARCELA: number;
}

class CreateReceberService{
    async execute({ NUMERO, CODCLI, CODREP, VALOR_TOTAL, PARCELA, VALOR_PARCELA }: ReceberRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('NUMERO inválido')
        // }

        const receber = await prismaClient.receber.create({
            data: {
                NUMERO: NUMERO,
                CODCLI: CODCLI,  
                CODREP: CODREP,     
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