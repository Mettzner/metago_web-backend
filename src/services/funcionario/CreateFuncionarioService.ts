import prismaClient from "../../prisma";

interface FuncionarioRequest{
    CODFUN: number;
    NOME: string;
}

class CreateFuncionarioService{
    async execute({ NOME, CODFUN }: FuncionarioRequest){
        
        if(NOME === ''){
            throw new Error('Nome inválido')
        }

        const funcionario = await prismaClient.funcionario.create({
            data: {
                CODFUN: CODFUN,
                NOME: NOME,
            },
            select:{
                CODFUN: true,
                NOME:true,
            }
        })

        return funcionario

    }
}

export { CreateFuncionarioService }