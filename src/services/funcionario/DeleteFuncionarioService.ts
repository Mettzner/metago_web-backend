import prismaClient from "../../prisma";

interface FuncionarioRequest {
    ID_FUNCIONARIO: string;

}

class DeleteFuncionarioService {
    async execute({ ID_FUNCIONARIO }: FuncionarioRequest) {

        const funcionario = await prismaClient.funcionario.delete({
            where: {
                ID_FUNCIONARIO: ID_FUNCIONARIO
            }
        })

        return funcionario;

    }
}

export { DeleteFuncionarioService }