import { Request, Response } from 'express'
import { CreateReceberService } from '../../services/receber/CreateReceberService'

class CreateReceberController{
    async handle (req: Request, res:Response){
        const { NUMERO, CODCLI, CODREP, VALOR_TOTAL, PARCELA, VALOR_PARCELA } = req.body;

        const createReceberService = new CreateReceberService

        const receber = await createReceberService.execute({
                NUMERO,       
                CODCLI,   
                CODREP,       
                VALOR_TOTAL,  
                PARCELA,       
                VALOR_PARCELA, 
        });

        return res.json(receber);

    }
}

export { CreateReceberController }