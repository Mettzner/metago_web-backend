import { Request, Response } from 'express'
import { CreateRepresenService } from '../../services/represen/CreateRepresenService'

class CreateRepresenController{
    async handle (req: Request, res:Response){
        const { CODREP, NOME, CODCLI } = req.body;

        const createRepresenService = new CreateRepresenService

        const represen = await createRepresenService.execute({
            CODREP,
            NOME,
            CODCLI,
        });

        return res.json(represen);

    }
}

export { CreateRepresenController }