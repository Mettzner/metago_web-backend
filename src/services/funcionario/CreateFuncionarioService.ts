import prismaClient from "../../prisma";

interface FuncionarioRequest{
    ID_FUNCIONARIO: string;
    NOME: string;
}

class CreateFuncionarioService{
    async execute({ NOME, ID_FUNCIONARIO }: FuncionarioRequest){
        
        if(NOME === ''){
            throw new Error('Nome inválido')
        }

        const funcionario = await prismaClient.funcionario.create({
            data: {
                ID_FUNCIONARIO: ID_FUNCIONARIO,
                NOME: NOME,
            },
            select:{
                ID_FUNCIONARIO: true,
                NOME:true,
            }
        })

        return funcionario

    }
}

export { CreateFuncionarioService }