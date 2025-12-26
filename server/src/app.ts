import express from "express";
import cors from 'cors'; 
import bodyParser from "body-parser";
import { logger } from "./middleware/loggerMiddleware.js";
import { auth } from "./middleware/authMiddleware.js";
import { userRouter } from "./routes/userRouter.js";
import { expenseRouter } from "./routes/expensesRouter.js";
import { watchlistRouter } from "./routes/watchlistRouter.js";

// app
export const app = express(); 

// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json())
app.use(bodyParser.urlencoded()); 
app.use(auth);
app.use(logger); 

// routes
app.use(userRouter);
app.use(expenseRouter);
app.use(watchlistRouter); 