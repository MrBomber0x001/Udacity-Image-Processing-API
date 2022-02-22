import express, {NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRoutes from './handlers/api';
import homeRoutes from './handlers/home';
const app: express.Application = express();
import morgan from 'morgan';
/* App Configurations */
app.use(morgan('short'));
dotenv.config();

app.use(cors());
const PORT = process.env.PORT || 5000;

/* Mounting routes */
homeRoutes(app);
apiRoutes(app);

/* Error Handling */
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(404).send('there is no route like this');
    next();
})
/* Initiating the server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
export default app;