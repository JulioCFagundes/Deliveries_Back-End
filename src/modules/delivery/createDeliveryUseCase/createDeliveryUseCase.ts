import { prisma } from "../../../database/prismaClient";


interface ICreateDelivery {
    item_name: string,
    client_id: string,
}
export class CreateDeliveryUseCase {
    async execute({ item_name, client_id }: ICreateDelivery) {
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                client_id,
            }
        })

        return delivery
    }


}