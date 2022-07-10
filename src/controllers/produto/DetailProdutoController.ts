import { Request, Response } from 'express'
import { DetailProdutoService } from '../../services/produto/DetailProdutoService'

class DetailProdutoController {
    async handle(req: Request, res: Response) {
        const ID_PRODUTO = req.params.ID_PRODUTO;

        const detailProdutoService = new DetailProdutoService();

        const produto = await detailProdutoService.execute({
            ID_PRODUTO
        }
        );

        return res.json(produto);

    }
}

export { DetailProdutoController }