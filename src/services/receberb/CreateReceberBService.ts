import prismaClient from "../../prisma";

interface ReceberBRequest{
    NUMERO: number;
    ID_CLIENTE: string;
    ID_FUNCIONARIO: string;
    PARCELA: string;
    VALOR_PAGO: number;
    VALOR_PARCELA: number;
}

class CreateReceberBService{
    async execute({ NUMERO, ID_CLIENTE, ID_FUNCIONARIO, PARCELA, VALOR_PAGO, VALOR_PARCELA }: ReceberBRequest){
        
        // if(NUMERO === ''){
        //     throw new Error('Nome inválido')
        // }

        const receber = await prismaClient.receberB.create({
            data: {
               NUMERO: NUMERO,
               ID_CLIENTE: ID_CLIENTE,
               ID_FUNCIONARIO: ID_FUNCIONARIO,
               PARCELA: PARCELA,
               VALOR_PAGO: VALOR_PAGO,
               VALOR_PARCELA: VALOR_PARCELA,
            },
            select:{
                NUMERO: true,
                ID_CLIENTE:true,
                ID_FUNCIONARIO:true,
                PARCELA:true,
                VALOR_PAGO:true,
                VALOR_PARCELA:true,
            }
        })

        return receber

    }
}

export { CreateReceberBService }