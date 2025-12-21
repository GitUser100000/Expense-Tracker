import { Router } from "express";
import { getWatchlist, getWatchlistItemById, createWatchlistItemByUserId, editWatchlistItemById, deleteWatchlistItemById } from "../controllers/watchlistController";

export const watchlistRouter = Router(); 

// get watchlist by user id (req.user.id from auth middleware)
watchlistRouter.get('/watchlist', getWatchlist)

// get watchlist item by id
watchlistRouter.get('/watchlist/:id', getWatchlistItemById);

// create watchlist item (req.user.id from auth middleware)
watchlistRouter.post('/watchlist', createWatchlistItemByUserId);

// edit watchlist item by id
watchlistRouter.put('/watchlist/:id', editWatchlistItemById);

// delete watchlist item by id 
watchlistRouter.delete('/watchlist/:id', deleteWatchlistItemById);