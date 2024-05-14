import { Request, Response, NextFunction } from 'express';
import problem from '../lib/errorHandling/problem';

// Controller handler Request and Response
const getTest2 = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = [{
      test2: "Works fine!"
    }];

    return res.status(200).json({
      status: 'success',
      data,
    });
  } catch (error) {
    console.error("error:", error);

    next(problem(1001, req));
  }
};

export { getTest2 };
