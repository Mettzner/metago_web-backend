import prismaClient from "../../prisma";
class ListFuncionarioService {
    async execute() {

        const funcionario = await prismaClient.funcionario.findMany({
            select: {
                ID_FUNCIONARIO: true,
                CODFUN: true,
                NOME: true,
                DT_CADASTRO: true,

            }
        })

        return funcionario;

    }
}

export { ListFuncionarioService }