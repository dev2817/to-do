import { Request, Response } from 'express';
import { getAllTasks } from '../services/todoService';

export const fetchTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
};
