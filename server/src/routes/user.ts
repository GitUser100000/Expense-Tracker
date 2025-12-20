import { Router } from "express";

export const userRouter = Router(); 

// get user data
userRouter.get('/users/:id');

// create user data
userRouter.post('/users');

// edit user data (email handled through supabase auth client)
userRouter.put('/users/:id');

// delete user data 
userRouter.delete('/users/:id');

