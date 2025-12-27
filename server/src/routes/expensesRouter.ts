import { Router } from "express";
import { getExpenses, getExpenseById, getExpenseTotal, createExpenseByUserId, editExpenseById, deleteExpenseById } from "../controllers/expensesController.js";

export const expenseRouter = Router(); 

// get all expenses by user id (req.user.id from auth middleware)
expenseRouter.get('/expenses', getExpenses)

// get sum of expenses (req.user.id from auth middleware)
expenseRouter.get('/expenses/total', getExpenseTotal)

// get expense by id
expenseRouter.get('/expenses/:id', getExpenseById);

// create expense (req.user.id from auth middleware)
expenseRouter.post('/expenses', createExpenseByUserId);

// edit expense by id
expenseRouter.put('/expenses/:id', editExpenseById);

// delete expense by id 
expenseRouter.delete('/expenses/:id', deleteExpenseById);