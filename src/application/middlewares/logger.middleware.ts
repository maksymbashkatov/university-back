import express from 'express';

const logger = (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction,
) => {
  const { url, method } = request;
  console.log(`url: ${url}, method: ${method}`);

  next();
};

export default logger;
