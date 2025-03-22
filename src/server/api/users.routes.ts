import express from 'express';
import { storeUserDatabase, findUserDatabase, loginUserDatabase } from './users.controller.js'; // controller imports

export const usersRouter = express.Router(); // xported into server.ts

// Routes for /users

// GET
usersRouter.get('/users', findUserDatabase); // NOTE remove later

// POST
usersRouter.post('/users/signup', storeUserDatabase);
usersRouter.post('/users/signin', loginUserDatabase);
