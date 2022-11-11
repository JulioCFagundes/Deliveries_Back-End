import "express-async-errors";
import express, { Request, Response } from "express";
import { routes } from "./routes";



const app = express();

app.use(express.json());

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: Function) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});


app.listen(3000, () => { console.log("server is running on port 3000") });