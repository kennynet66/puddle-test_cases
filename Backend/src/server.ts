import express, { NextFunction, Request, Response, json } from 'express';
import dotenv from 'dotenv';
import registerRoute from './routes/register.route';

dotenv.config();

const app = express();

app.use(json());

app.use('/user',registerRoute);

app.use((error: Error, req: Request, res: Response, next: NextFunction) =>{
    res.json({
        error
    })
});

app.listen(process.env.PORT, () =>{
    console.log(`server is listening on port ${process.env.PORT}`);
})
