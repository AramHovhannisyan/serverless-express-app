import express from 'express';
import { getTest, postTest } from '../controllers/testController';
import validateAndSetTest from '../lib/middlewares/testMiddleware';

const testRouter = express.Router();
testRouter.route('/').get(validateAndSetTest, getTest);
testRouter.route('/').post(postTest);

export { testRouter };