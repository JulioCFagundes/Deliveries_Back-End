import { Response, Request } from "express";
import { AuthenticateClientUseCase } from "./authenticateClientUseCase";


export class AuthenticateClientController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const result = await authenticateClientUseCase.execute({
            username,
            password
        });
        return res.json(result);
    }
}