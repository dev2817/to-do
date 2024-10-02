import express from 'express'
import { fetchTasks } from '../controllers/todoController';

const router = express.Router();

//task routes
router.route('/getTasks').get(fetchTasks)

export default router;