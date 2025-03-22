import express from 'express';
import { Request, Response } from 'express';
import { usersRouter } from './api/users.routes.js';
import cors from 'cors';

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(usersRouter);
/*app.use((req: Request, res: Response, next) => {
  // LOGGING MIDDLEWARE
  console.log('incoming request', {
    ip: req.ip,
  });
  next();
});*/
// MIDDLEWARE

export const server = () => {
  app.listen(3000, () => {
    console.log(`APP LISTENING ON 3000`);
  });
};
