import express from 'express'
import { fetchUsers } from '../controllers/userController';

const router = express.Router();

//user routes
router.route('/getUsers').get(fetchUsers)

export default router;