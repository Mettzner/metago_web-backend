import prismaClient from "../../prisma";

interface DetailCliente {
    ID_CLIENTE: string;
}

class DetailClienteService {
    async execute({ ID_CLIENTE }: DetailCliente) {

        const cliente = await prismaClient.cliente.findMany({
            where: {
                ID_CLIENTE: ID_CLIENTE
            },
            select: {
                NOME: true,
                CNPJ: true,
                TELEFONE: true,
                ENDERECO: true,
                EMAIL: true,
                BAIRRO: true,
                NUMERO: true,
                CIDADE: true,
                UF: true,
                PAIS: true,
                COMPLEMENTO: true,
                CEP: true,
            }
        })

        return cliente;
    }
}

export { DetailClienteService }