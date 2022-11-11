import { compare } from "bcrypt";
import { prisma } from "../../../database/prismaClient";
import { sign } from "jsonwebtoken"

interface IAuthenticateClient {
    username: string;
    password: string;
}

export class AuthenticateClientUseCase {

    async execute(data: IAuthenticateClient) {
        // receber username e password



        //verrificar se o username está cadastrado
        const client = await prisma.clients.findFirst({
            where: {
                username: data.username,
            }
        });
        if (!client) {
            throw new Error("Username or password invalid!");
        }

        //verificar se senha corresponde ao username

        const passwordMatch = await compare(data.password, client.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!");
        }
        const username = data.username
        //gerar o token
        const token = sign({ username }, "30e11a2462e87e5733b5956fb34cdcf1", {
            subject: client.id,
            expiresIn: "1d"
        })
        return token;
    }

}