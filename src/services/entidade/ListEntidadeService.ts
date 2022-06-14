import prismaClient from "../../prisma";
class ListEntidadeService{
    async execute(){

        const entidade = await prismaClient.entidade.findMany({
            select: {
                CODCLI: true,
                NOME: true,
            }
        })

        return entidade;

    }
}

export { ListEntidadeService }