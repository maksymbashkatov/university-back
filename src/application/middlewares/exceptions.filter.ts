import express from 'express';
import HttpException from '../exceptions/http-exception';
import { HttpStatuses } from '../enums/http-statuses.enum';

const exceptionFilter = (
  error: HttpException,
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) => {
  const status = error.status || HttpStatuses.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Something went wrong';
  response.status(status).send({ status, message });
};

export default exceptionFilter;
