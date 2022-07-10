import prismaClient from "../../prisma";

interface ProductRequest {
  DESCRICAO: string;
  PRECO: number;
}

class CreateProdutoService {
  async execute({ DESCRICAO, PRECO }: ProductRequest) {

    const produto = await prismaClient.produto.create({
      data: {
        DESCRICAO: DESCRICAO,
        PRECO: PRECO,
      }
    })

    return produto;

  }
}

export { CreateProdutoService }

