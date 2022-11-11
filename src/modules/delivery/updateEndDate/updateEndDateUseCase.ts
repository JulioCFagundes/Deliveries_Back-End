import { prisma } from '../../../database/prismaClient';

interface IUpdateEndDate {
    delivery_id: string;
    deliveryman_id: string;
}


export class UpdateEndDateUseCase {
    async execute({ delivery_id, deliveryman_id }: IUpdateEndDate) {
        const result = await prisma.deliveries.update({
            where: {
                LinkDeliveryManDelivery: {
                    id: delivery_id,
                    deliveryman_id
                }
            },
            data: {
                end_at: new Date(),
            }
        });

        return result;
    }

}