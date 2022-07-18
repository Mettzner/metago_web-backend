import prismaClient from "../../prisma";

interface DetailFuncionairio {
    ID_FUNCIONARIO: string;
}

class DetailFuncionarioService {
    async execute({ ID_FUNCIONARIO }: DetailFuncionairio) {

        const funcionario = await prismaClient.funcionario.findMany({
            where: {
                ID_FUNCIONARIO: ID_FUNCIONARIO
            },
            select: {
                CODFUN: true,
                NOME: true,
                DT_CADASTRO: true,
            }
        })

        return funcionario;
    }
}

export { DetailFuncionarioService }