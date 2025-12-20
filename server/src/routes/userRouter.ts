import { Router } from "express";
import { getUserSettings, editUserSettings, deleteUserSettings } from "../controllers/userController";

export const userRouter = Router(); 

// get user data by id (req.user.id from auth middleware)
userRouter.get('/users', getUserSettings);

// create user data by id (req.user.id from auth middleware) -- REMOVED
// userRouter.post('/users');

// edit user data (email handled through supabase auth client) -- using upsert
userRouter.put('/users', editUserSettings);

// delete user data (req.user.id from auth middleware)
userRouter.delete('/users', deleteUserSettings);

