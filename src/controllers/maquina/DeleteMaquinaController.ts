import { Request, Response } from 'express'
import { DeleteMaquinaService } from '../../services/maquina/DeleteMaquinaService'     

class DeleteMaquinaController{
    async handle(req: Request, res: Response){
        const ID_MAQUINA = req.query.ID_MAQUINA as string;


        const deleteMaquina = new DeleteMaquinaService();

        const maquina = await deleteMaquina.execute({
            ID_MAQUINA 
        });

        return res.json(maquina);

    }
}

export { DeleteMaquinaController }