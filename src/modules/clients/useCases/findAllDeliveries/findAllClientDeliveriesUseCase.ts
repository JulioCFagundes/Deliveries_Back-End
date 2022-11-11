import { prisma } from "../../../../database/prismaClient";



export class FindAllClientDeliveriesUseCase {
    async execute(client_id: string) {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: client_id
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