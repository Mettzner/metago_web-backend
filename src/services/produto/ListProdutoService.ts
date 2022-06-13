import prismaClient from "../../prisma";
class ListProdutoService{
    async execute(){

        const produto = await prismaClient.produto.findMany({
            select: {
                CODIGO: true,
                DESCRICAO: true,
            }
        })

        return produto;

    }
}

export { ListProdutoService }