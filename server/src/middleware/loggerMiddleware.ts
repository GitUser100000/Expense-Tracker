import { Request, Response, NextFunction } from "express"

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now(); 
  res.on("finish", () => {
    console.log({
      method: req.method,
      url: req.originalUrl,
      status: req.statusCode,
      durationMs: Date.now() - start,
      ip: req.ip
    })
  })

  next(); 
}