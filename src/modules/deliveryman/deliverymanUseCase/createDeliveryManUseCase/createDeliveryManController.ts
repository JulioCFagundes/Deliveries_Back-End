import { Request, Response } from "express";
import { CreateDeliveryManUseCase } from "./createDeliverymanUseCase";



export class CreateDeliveryManController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createDeliveryManUseCase = new CreateDeliveryManUseCase();
        const result = await createDeliveryManUseCase.execute({
            username: req.body.username,
            password: req.body.password,
        });
        return res.status(201).json(result);
    };
}
