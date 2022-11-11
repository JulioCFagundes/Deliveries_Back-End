import { Request, Response } from "express";
import { UpdateDeliveryManUseCase } from "./updateDeliverymanUseCase";




export class UpdateDeliveryManController {
    async handle(req: Request, res: Response) {
        const { deliveryman_id } = req;
        const { id: delivery_id } = req.params;

        const updateDeliveryManUseCase = new UpdateDeliveryManUseCase();
        const delivery = await updateDeliveryManUseCase.execute({ delivery_id, deliveryman_id });

        return res.json(delivery);
    }
}