import express from 'express'
import userRoutes from './userRoutes'
import todoRoutes from './todoRoutes'

const router = express.Router();

const defaultRoutes = [
    {
      path: '/users',
      route: userRoutes,
    },
    {
      path: '/todo',
      route: todoRoutes,
    },
  ];
  
  defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });


export default router