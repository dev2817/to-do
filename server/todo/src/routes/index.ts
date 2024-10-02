import express from 'express'
import taskRoutes from './taskRoutes'

const router = express.Router();

const defaultRoutes = [
    {
      path: '/tasks',
      route: taskRoutes,
    },
  ];
  
  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });


export default router