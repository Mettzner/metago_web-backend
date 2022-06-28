import { Request, Response } from 'express'
import { CreateClienteService } from '../../services/cliente/CreateClienteService'

class CreateClienteController{
    async handle (req: Request, res:Response){
        const { NOME, CNPJ, EMAIL, TELEFONE, ENDERECO, CIDADE, BAIRRO, NUMERO, 
                    UF, PAIS, COMPLEMENTO, CEP, ID_CLIENTE } = req.body;

        const createClienteService = new CreateClienteService

        const cliente = await createClienteService.execute({
            NOME,
            CNPJ, 
            EMAIL, 
            TELEFONE, 
            ENDERECO, 
            CIDADE, 
            BAIRRO, 
            NUMERO,   
            UF, 
            PAIS, 
            COMPLEMENTO, 
            CEP, 
            ID_CLIENTE,
        });

        return res.json(cliente);

    }
}

export { CreateClienteController }