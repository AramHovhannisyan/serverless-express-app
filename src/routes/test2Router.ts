import express from 'express';
import { getTest2 } from '../controllers/getTest2';

const test2Router = express.Router();
test2Router.route('/').get(getTest2);

export { test2Router };