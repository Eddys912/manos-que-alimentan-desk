import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from '../src/interfaces/routes/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/api/v1', router);

export default app;
