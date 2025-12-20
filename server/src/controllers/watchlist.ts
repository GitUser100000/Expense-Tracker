import { prisma } from "../database/prismaClient";
import { Request, Response } from "express";

export async function getWatchlist(req: Request, res: Response) {
  try {
    const userId = req.user!.id; 
    const watchlist = await prisma.watchlistItem.findMany({
      where: {
        userId: userId
      },
    })
    return res.status(200).json(watchlist); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function getWatchlistItemById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id); 
    const userId = req.user!.id;
    if (!id) return res.status(404).json({ error: `no id supplied`})
    const watchlistItem = await prisma.watchlistItem.findUnique({
      where: {
        id: id,
        userId
      }      
    })
    if (watchlistItem === null) return res.status(401).json({ error: `could not find watchlist item with id: ${id}`});
    return res.status(200).json(watchlistItem); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function createWatchlistItemByUserId(req: Request, res: Response) {
  try {
    const user = req.user; 
    const newWatchlistItem = req.body; 
    if (
      newWatchlistItem.name === undefined ||
      newWatchlistItem.previous === undefined ||
      newWatchlistItem.current === undefined ||
      newWatchlistItem.markup === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const watchlistItem = await prisma.expense.create({
      data: {
        ...newWatchlistItem,
        userId: user.id
      }
    })
    return res.status(200).json(watchlistItem); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function editWatchlistItemById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id); 
    const userId = req.user!.id; 
    if (!id) return res.status(404).json({ error: `no watchlist item with id: ${id}`});  
    const newWatchlisItem = req.body; 

    const data: any = {}; 
    if (newWatchlisItem.name !== undefined) data.name = newWatchlisItem.name;
    if (newWatchlisItem.previous !== undefined) data.price = newWatchlisItem.price;
    if (newWatchlisItem.current !== undefined) data.occurance = newWatchlisItem.occurance;
    if (newWatchlisItem.markup !== undefined) data.category = newWatchlisItem.category;

    const watchlistItem = await prisma.expense.update({
      where: {
        id,
        userId
      },
      data: data
    })
    return res.status(200).json(watchlistItem); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function deleteWatchlistItemById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id); 
    const userId = req.user!.id; 
    if (!id) return res.status(404).json({ error: `no expense with id: ${id}`});  

    const watchlistItem = await prisma.expense.delete({
      where: {
        id,
        userId
      }
    })
    return res.status(200).json(watchlistItem); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

