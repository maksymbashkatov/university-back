import { NextFunction, Request, Response } from 'express';

const controllerWrapper = (requestHandler: any) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await requestHandler(request, response, next);
    } catch (error) {
      next(error);
    }
  };
};

export default controllerWrapper;
