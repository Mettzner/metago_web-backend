import prismaClient from "../../prisma";

interface DetailProduto {
    ID_PRODUTO: string;
}

class DetailProdutoService {
    async execute({ ID_PRODUTO }: DetailProduto) {

        const produto = await prismaClient.produto.findMany({
            where: {
                ID_PRODUTO: ID_PRODUTO
            },
            select: {
                DESCRICAO: true,
                PRECO: true

            }
        })

        return produto;
    }
}

export { DetailProdutoService }