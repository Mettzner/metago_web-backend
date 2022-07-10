import prismaClient from "../../prisma";


class ListClienteService {
    async execute() {

        const servico = await prismaClient.cliente.findMany({
            select: {
                CODCLI: true,
                NOME: true,
                CNPJ: true,
                CIDADE: true,
                TELEFONE: true,
                DT_CADASTRO: true,
                ID_CLIENTE: true,
            },
            orderBy: {
                CODCLI: 'desc',
            }
        })

        return servico;

    }
}

export { ListClienteService }