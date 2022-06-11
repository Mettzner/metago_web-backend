import {Request, Response } from 'express'
import { CreateProdutoService } from '../../services/produto/CreateProdutoService'


class CreateProdutoController{
  async handle(req: Request, res: Response){
    const { CODIGO, DESCRICAO, PRECO } = req.body;

    const createProdutoService = new CreateProdutoService();

    if(!req.file){
      throw new Error("error upload file")
    }else{

      const produto = await createProdutoService.execute({
        CODIGO,
        DESCRICAO,
        PRECO,
      });
  
      return res.json(produto)
    }

  }
}

export { CreateProdutoController }
