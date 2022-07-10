import prismaClient from "../../prisma";


class ListServicoService {
    async execute() {

        const servicos = await prismaClient.servicos.findMany({
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

        return servicos;

    }
}

export { ListServicoService }