import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface PayLoad{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){

    //RECEBER O TOKEN
    const authToken = req.headers.authorization;

    if (!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ")

    try{
        //validar este token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        //recuperar o id do token e colocar dentro de uma
        //variável user_id dentro do req
        req.ID_USUARIO = sub;

        //se der tudo certo, prossegue
        return next();

    }catch(err){
        return res.status(401).end();
    }

}