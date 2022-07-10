import { Request, Response } from 'express'
import { UpdateClienteService } from '../../services/cliente/UpdateClienteService'


class UpdateClienteController {
    async handle(req: Request, res: Response) {
        const { NOME, CNPJ, EMAIL, TELEFONE, ENDERECO, CIDADE, BAIRRO, NUMERO,
            UF, PAIS, COMPLEMENTO, CEP, ID_CLIENTE } = req.body;


        const updateCliente = new UpdateClienteService();

        const cliente = await updateCliente.execute({
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

export { UpdateClienteController }