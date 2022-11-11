import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./findAllDeliveriesDeliverymanUseCase";






export class FindAllDeliverymanDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { deliveryman_id } = req
        const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase();
        const delivery = await findAllDeliveriesDeliverymanUseCase.execute(deliveryman_id)

        return res.json(delivery)
    }
}