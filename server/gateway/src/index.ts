import express, { Request, Response } from 'express';
import 'dotenv/config';
import logger from './utils/logger';
import cors from 'cors';
import router from './routes';

const app = express();
const port: number = parseInt(process.env.PORT as string, 10) || 5000;

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));

app.get('/v1/test', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use('/v1', router);

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
