import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../database/supabaseAdmin.js";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization; 
  if (!authHeader) return res.status(401).json({ error: "Missing Authorisation Token!" });
  const token = authHeader.replace("Bearer ", ""); 
  const user = await verifyToken(token); 
  if (!user) return res.status(401).json({ error: "Invalid Token!" }); 
  // (req as any).user = user;
  req.user = user; 
  next(); 
}