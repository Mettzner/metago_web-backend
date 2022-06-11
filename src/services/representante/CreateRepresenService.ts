import prismaClient from "../../prisma";

interface RepresenRequest{
    CODREP: string;
    NOME: string;
    CODCLI: string;
}

class CreateRepresenService{
    async execute({ NOME, CODREP, CODCLI }: RepresenRequest){
        
        if(NOME === ''){
            throw new Error('Nome inválido')
        }

        const represen = await prismaClient.represen.create({
            data: {
                CODREP: CODREP,
                NOME: NOME,
                CODCLI: CODCLI,
            },
            select:{
                CODREP: true,
                NOME:true,
            }
        })

        return represen

    }
}

export { CreateRepresenService }