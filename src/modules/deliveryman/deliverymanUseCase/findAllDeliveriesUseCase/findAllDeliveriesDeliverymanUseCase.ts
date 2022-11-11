import { prisma } from '../../../../database/prismaClient';




export class FindAllDeliveriesDeliverymanUseCase {
    async execute(deliveryman_id: string) {
        const deliveries = await prisma.deliveryman.findUnique({
            where: {
                id: deliveryman_id
            },
            select: {
                deliveries: true,
                id: true,
                username: true,
            },
        });
        return deliveries;
    }
}
