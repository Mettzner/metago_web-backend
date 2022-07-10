import prismaClient from "../../prisma";

interface ServicoRequest {
    ID_CLIENTE: string,
    NOME_CLI: string,
    ID_FUNCIONARIO: string,
    NOME_FUN: string,
    ID_MAQUINA: string,
    ID_PRODUTO: string,
    QTDE_HORAS: string,
    VALOR: number,


}

class CreateServicoService {
    async execute({ ID_CLIENTE, NOME_CLI, ID_FUNCIONARIO, NOME_FUN, ID_MAQUINA, ID_PRODUTO, QTDE_HORAS, VALOR }: ServicoRequest) {

        const servico = await prismaClient.servicos.create({
            data: {
                ID_CLIENTE: ID_CLIENTE,
                NOME_CLI: NOME_CLI,
                ID_FUNCIONARIO: ID_FUNCIONARIO,
                NOME_FUN: NOME_FUN,
                ID_MAQUINA: ID_MAQUINA,
                ID_PRODUTO: ID_PRODUTO,
                QTDE_HORAS: QTDE_HORAS,
                VALOR: VALOR,
            },
            select: {
                ID_CLIENTE: true,
                NOME_CLI: true,
                ID_FUNCIONARIO: true,
                NOME_FUN: true,
                ID_MAQUINA: true,
                ID_PRODUTO: true,
                QTDE_HORAS: true,
                VALOR: true,
            }
        })

        return servico

    }
}

export { CreateServicoService }