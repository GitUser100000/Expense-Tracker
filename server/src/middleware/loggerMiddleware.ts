import { Request, Response, NextFunction } from "express"

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now(); 
  let body = null;
  if (req.body) body = req.body;
  if (req.body)
  res.on("finish", () => {
    console.log({
      method: req.method,
      url: req.originalUrl,
      status: req.statusCode,
      durationMs: Date.now() - start,
      ip: req.ip,
      start,
      body
    })
  })

  next(); 
}