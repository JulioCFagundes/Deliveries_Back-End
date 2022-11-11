import { Request, Response } from "express";
import { FindAllClientDeliveriesUseCase } from "./findAllClientDeliveriesUseCase";






export class FindAllClientDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { client_id } = req
        const findAllClientDeliveriesUseCase = new FindAllClientDeliveriesUseCase();
        const delivery = await findAllClientDeliveriesUseCase.execute(client_id)

        return res.json(delivery)
    }
}