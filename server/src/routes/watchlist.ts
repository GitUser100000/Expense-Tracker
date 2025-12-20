import { Router } from "express";

export const watchlistRouter = Router(); 

// get watchlist item by id
watchlistRouter.get('/watchlist/:id');

// get watchlist by user id (req.user.id from auth middleware)
watchlistRouter.get('/watchlist')

// create watchlist item (req.user.id from auth middleware)
watchlistRouter.post('/watchlist');

// edit watchlist item by id
watchlistRouter.put('/watchlist/:id');

// delete watchlist item by id 
watchlistRouter.delete('/watchlist/:id');