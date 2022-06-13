import { Request, Response } from 'express'
import { ListProdutoService } from '../../services/produto/ListProdutoService'

class ListProdutoController{
    async handle(req: Request, res: Response){
        const listProdutoService = new ListProdutoService();

        const produto = await listProdutoService.execute();

        return res.json(produto);

    }
}

export { ListProdutoController }