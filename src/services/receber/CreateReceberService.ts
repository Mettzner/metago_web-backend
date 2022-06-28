import prismaClient from "../../prisma";

interface ReceberRequest{
        NUMERO          : number;
        ID_CLIENTE      : string;
        ID_FUNCIONARIO  : string;
        VALOR_TOTAL     : number;
        PARCELA         : string;
        VALOR_PARCELA   : number;
}

class CreateReceberService{
    async execute({ NUMERO, ID_CLIENTE, ID_FUNCIONARIO, VALOR_TOTAL, PARCELA, VALOR_PARCELA }: ReceberRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('NUMERO inválido')
        // }

        const receber = await prismaClient.receber.create({
            data: {
                NUMERO: NUMERO,
                ID_CLIENTE: ID_CLIENTE,  
                ID_FUNCIONARIO: ID_FUNCIONARIO,     
                VALOR_TOTAL: VALOR_TOTAL,
                PARCELA: PARCELA,   
                VALOR_PARCELA: VALOR_PARCELA,
            },
            select:{
                NUMERO: true,
                ID_CLIENTE:true,
            }
        })

        return receber

    }
}

export { CreateReceberService }