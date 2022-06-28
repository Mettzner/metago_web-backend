import prismaClient from "../../prisma";
class ListFuncionarioService{
    async execute(){

        const funcionario = await prismaClient.funcionario.findMany({
            select: {
                ID_FUNCIONARIO: true,
                NOME: true,
            }
        })

        return funcionario;

    }
}

export { ListFuncionarioService }