import express, { Application, Request, Response } from 'express';
import cors from "cors"
const app:Application = express()
const port = 3000

app.use(express.json());
app.use(cors());


app.get('/', (req:Request, res:Response) => {
    const c =10;
  res.send(c)
})

export default app;

