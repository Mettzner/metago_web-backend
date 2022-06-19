import prismaClient from "../../prisma";
class ListEntidadeService{
    async execute(){

        const entidade = await prismaClient.entidade.findMany({
            select: {
                CODCLI: true,
                NOME: true,
                CNPJ: true,
                CIDADE: true,
            }
        })

        return entidade;

    }
}

export { ListEntidadeService }