import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(req: Request, res: Response, next: NextFunction) {
    const autHeader = req.headers.authorization;

    if (!autHeader) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }
    const [, token] = autHeader.split(" "); //separa o token pelo espaço (separa por vírgula e dá o nome de token pra segunda posição)

    try {
        const { sub } = verify(token, "30e11a2462e87e5733b9756fb34cdcf1") as IPayload
        console.log(sub);
        req.deliveryman_id = sub;

        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

}