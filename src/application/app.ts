import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import studentsRouter from '../students/students.router';
import bodyParser from 'body-parser';
import exceptionFilter from './middlewares/exceptions.filter';
import path from 'path';
import groupsRouter from '../groups/groups.router';
import { AppDataSource } from '../configs/database/data-source';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

AppDataSource.initialize()
  .then(() => {
    console.log('Typeorm connected to database');
  })
  .catch((error) => {
    console.log('Error: ', error);
  });

const staticFilesPath = path.join(__dirname, '../', 'public');

app.use('/api/v1/public', express.static(staticFilesPath));
app.use('/api/v1/students', studentsRouter);
app.use('/api/v1/groups', groupsRouter);

// Должен быть последним вызваным, чтобы ловить все ошибки во всех предыдущих Middleware и Controlers
app.use(exceptionFilter);

export default app;
