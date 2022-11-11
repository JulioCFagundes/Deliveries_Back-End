import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";





export class CreateDeliveryController {
    async handle(req: Request, res: Response) {
        const { item_name } = req.body;
        const { client_id } = req
        const createDeliveryUseCase = new CreateDeliveryUseCase()
        const delivery = await createDeliveryUseCase.execute({ client_id, item_name })
        return res.status(200).json(delivery)
    }
}