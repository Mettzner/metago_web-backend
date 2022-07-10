import prismaClient from "../../prisma";

interface DetailServico {
    ID_SERVICO: string;
}

class DetailServicoService {
    async execute({ ID_SERVICO }: DetailServico) {

        const servicos = await prismaClient.servicos.findMany({
            where: {
                ID_SERVICO: ID_SERVICO
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

        return servicos;
    }
}

export { DetailServicoService }