import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./updateEndDateUseCase";




export class UpdateEndDateController {
    async handle(req: Request, res: Response) {
        const { deliveryman_id } = req;
        const { id: delivery_id } = req.params;

        const updateEndDateUseCase = new UpdateEndDateUseCase();
        const delivery = await updateEndDateUseCase.execute({ delivery_id, deliveryman_id });

        return res.json(delivery);
    }
}