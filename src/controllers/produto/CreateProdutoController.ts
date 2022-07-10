import { Request, Response } from 'express'
import { CreateProdutoService } from '../../services/produto/CreateProdutoService'


class CreateProdutoController {
  async handle(req: Request, res: Response) {
    const { DESCRICAO, PRECO } = req.body;

    const createProdutoService = new CreateProdutoService();

    const produto = await createProdutoService.execute({
      DESCRICAO,
      PRECO,
    });

    return res.json(produto)
  }

}

export { CreateProdutoController }
