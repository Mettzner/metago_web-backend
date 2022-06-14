import { Request, Response } from 'express'
import { CreateEntidadeService } from '../../services/entidade/CreateEntidadeService'

class CreateEntidadeController{
    async handle (req: Request, res:Response){
        const { NOME, CNPJ, EMAIL, TELEFONE, ENDERECO, CIDADE, BAIRRO, NUMERO, 
                    UF, FUNCAO, PAIS, COMPLEMENTO, CEP, TIPO, STATUS } = req.body;

        const createEntidadeService = new CreateEntidadeService

        const entidade = await createEntidadeService.execute({
            NOME,
            CNPJ, 
            EMAIL, 
            TELEFONE, 
            ENDERECO, 
            CIDADE, 
            BAIRRO, 
            NUMERO,   
            UF, 
            FUNCAO, 
            PAIS, 
            COMPLEMENTO, 
            CEP, 
            TIPO, 
            STATUS
        });

        return res.json(entidade);

    }
}

export { CreateEntidadeController }