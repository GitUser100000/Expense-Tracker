import express from "express";
import bodyParser from "body-parser";
import { logger } from "./middleware/loggerMiddleware";
import { auth } from "./middleware/authMiddleware";
import { userRouter } from "./routes/userRouter";
import { expenseRouter } from "./routes/expensesRouter";
import { watchlistRouter } from "./routes/watchlistRouter";

// app
export const app = express(); 

// middleware
app.use(auth);
app.use(logger); 
app.use(bodyParser.urlencoded()); 

// routes
app.use(userRouter);
app.use(expenseRouter);
app.use(watchlistRouter); 