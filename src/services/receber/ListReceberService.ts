import prismaClient from "../../prisma";
class ListReceberService{
    async execute(){

        const receber = await prismaClient.receber.findMany({
            select: {
                NUMERO: true,       
                ID_CLIENTE: true,   
                ID_FUNCIONARIO: true,       
                VALOR_TOTAL: true,  
                PARCELA: true,       
                VALOR_PARCELA: true, 
            }
        })

        return receber;

    }
}

export { ListReceberService }