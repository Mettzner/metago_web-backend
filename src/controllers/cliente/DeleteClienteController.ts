import { Request, Response } from 'express'
import { DeleteClienteService } from '../../services/cliente/DeleteClienteService'     


class DeleteClienteController{
    async handle(req: Request, res: Response){
        const ID_CLIENTE = req.query.ID_CLIENTE as string;


        const deleteCliente = new DeleteClienteService();

        const cliente = await deleteCliente.execute({
            ID_CLIENTE
        });

        return res.json(cliente);

    }
}

export { DeleteClienteController }