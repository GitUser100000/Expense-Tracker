import { Router } from "express";

export const expenseRouter = Router(); 

// get expense by id
expenseRouter.get('/expenses/:id');

// get all expenses by user id (req.user.id from auth middleware)
expenseRouter.get('/expenses')

// create expense (req.user.id from auth middleware)
expenseRouter.post('/expenses');

// edit expense by id
expenseRouter.put('/expenses/:id');

// delete expense by id 
expenseRouter.delete('/expenses/:id');