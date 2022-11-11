import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryMan {
    username: string;
    password: string;
}

export class CreateDeliveryManUseCase {
    async execute({ username, password }: ICreateDeliveryMan) {

        const deliverymanExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive", //tras os clients ignorando maiúsculo ou minúsculo
                },
            },
        });

        if (deliverymanExists) {
            throw new Error("deliverymanExists already exists");
        }


        //criptografar a senha 
        const hashPassword = await hash(password, 10);

        //salvar o client
        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword,
            },
        });
        return deliveryman
    }
}

