import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware';
import studentsRouter from '../students/students.router';
import bodyParser from 'body-parser';
import exceptionFilter from './middlewares/exceptions.filter';
import path from 'path';
import groupsRouter from '../groups/groups.router';
import { AppDataSource } from '../configs/database/data-source';
import lectorsRouter from '../lectors/lectors.router';
import coursesRouter from '../courses/courses.router';
import marksRouter from '../marks/marks.router';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'University API with Swagger',
      version: '0.1.0',
      description: 'University API',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: ['./**/*.router.ts', './**/*.interface.ts'],
};

const specs = swaggerJsdoc(options);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));

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
app.use('/api/v1/lectors', lectorsRouter);
app.use('/api/v1/courses', coursesRouter);
app.use('/api/v1/marks', marksRouter);

// Должен быть последним вызваным, чтобы ловить все ошибки во всех предыдущих Middleware и Controlers
app.use(exceptionFilter);

export default app;
