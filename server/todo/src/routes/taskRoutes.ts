import express from 'express'
import { fetchTasks } from '../controllers/taskController';

const router = express.Router();

router.route('/getTasks').get(fetchTasks)

export default router;