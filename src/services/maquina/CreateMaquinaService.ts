import prismaClient from "../../prisma";

interface MaquinaRequest{
    CODIGO: string;
    DESCRICAO: string;
}

class CreateMaquinaService{
    async execute({ CODIGO, DESCRICAO }: MaquinaRequest){
        
        if(DESCRICAO === ''){
            throw new Error('Nome inválido')
        }

        const maquina = await prismaClient.maquina.create({
            data: {
                CODIGO: CODIGO,
                DESCRICAO: DESCRICAO,
            },
            select:{
                ID_MAQUINA: true,
                DESCRICAO:true,
            }
        })

        return maquina;

    }
}

export { CreateMaquinaService }