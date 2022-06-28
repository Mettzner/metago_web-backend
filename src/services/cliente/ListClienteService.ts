import prismaClient from "../../prisma";
class ListClienteService{
    async execute(){

        const cliente = await prismaClient.cliente.findMany({
            select: {
                CODCLI: true,
                NOME: true,
                CNPJ: true,
                CIDADE: true,
                TELEFONE: true,
                DT_CADASTRO: true,
                ID_CLIENTE: true,
            }
        })

        return cliente;

    }
}

export { ListClienteService }