import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken"

interface IAuthenticateDeliveryMan {
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {

    async execute(data: IAuthenticateDeliveryMan) {
        // receber username e password



        //verrificar se o username está cadastrado
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: data.username,
            }
        });
        if (!deliveryman) {
            throw new Error("Username or password invalid!");
        }

        //verificar se senha corresponde ao username

        const passwordMatch = await compare(data.password, deliveryman.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }
        const username = data.username
        //gerar o token
        const token = sign({ username }, "30e11a2462e87e5733b9756fb34cdcf1", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })
        return token;
    }

}