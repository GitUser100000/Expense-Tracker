import express from "express";
import bodyParser from "body-parser";
import { logger } from "./middleware/loggerMiddleware";
import { auth } from "./middleware/authMiddleware";
import { userRouter } from "./routes/user";
import { expenseRouter } from "./routes/expenses";
import { watchlistRouter } from "./routes/watchlist";

export const app = express(); 

// middleware
app.use(auth);
app.use(logger); 
app.use(bodyParser.urlencoded()); 

// routes
app.use(userRouter);
app.use(expenseRouter);
app.use(watchlistRouter); 