import prismaClient from "../../prisma";
class ListFuncionarioService{
    async execute(){

        const funcionario = await prismaClient.funcionario.findMany({
            select: {
                CODFUN: true,
                NOME: true,
            }
        })

        return funcionario;

    }
}

export { ListFuncionarioService }