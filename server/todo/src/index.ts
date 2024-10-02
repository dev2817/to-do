import express, { Request, Response } from 'express';
import 'dotenv/config';
import logger from './utils/logger';
import cors from 'cors';
import sequelize from './config/database';
import router from './routes';

const app = express();
const port: number = parseInt(process.env.PORT as string, 10) || 5000;

app.use(cors());
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));

app.get('/test/todo', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use('/todo',router)

sequelize
  .sync()
  .then(() => {
    logger.info('Synced db.');
  })
  .catch((err: any) => {
    logger.error(`Failed to sync db: ${err.message}`);
  });

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});