import prismaClient from "../../prisma";

interface ProductRequest{
  CODIGO: string;
  DESCRICAO: string;
  PRECO: number;
}

class CreateProdutoService{
  async execute({CODIGO, DESCRICAO, PRECO}: ProductRequest){

    const produto = await prismaClient.produto.create({
      data:{
        CODIGO: CODIGO,
        DESCRICAO: DESCRICAO,
        PRECO: PRECO,
      }
    })

    return PRECO;

  }
}

export { CreateProdutoService }

