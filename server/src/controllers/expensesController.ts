import { prisma } from "../database/prismaClient.js";
import { Request, Response } from "express";

export async function getExpenses(req: Request, res: Response) {
  try {
    // const { id } = req.user; 
    const userId = req.user!.id; 
    const expenses = await prisma.expense.findMany({
      where: {
        userId: userId
      },
      orderBy: [
        {
          nextChargeDate: 'desc'
        }
      ]
    })
    return res.status(200).json(expenses); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function getExpenseById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id); 
    const userId = req.user!.id;
    if (!id) return res.status(404).json({ error: `no id supplied`})
    const expense = await prisma.expense.findUnique({
      where: {
        id: id,
        userId
      }      
    })
    if (expense === null) return res.status(401).json({ error: `could not find expense with id: ${id}`});
    return res.status(200).json(expense); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function getExpenseTotal(req: Request, res: Response) {
  const userId = req.user!.id;
  const { start, end } = req.query;

  if (!start) {
    return res.status(400).json({ error: "start date required" });
  }

  const total = await prisma.expense.aggregate({
    where: {
      userId,
      nextChargeDate: {
        gte: new Date(start as string),
        ...(end ? { lt: new Date(end as string) } : {}),
      },
    },
    _sum: {
      price: true,
    },
  });

  return res.json({ total: total._sum.price ?? 0 });
}

export async function createExpenseByUserId(req: Request, res: Response) {
  try {
    const user = req.user; 
    const newExpense = req.body; 
    if (
      newExpense.name === undefined ||
      newExpense.price === undefined ||
      newExpense.occurance === undefined ||
      newExpense.category === undefined ||
      newExpense.nextChargeDate === undefined ||
      newExpense.paymentType === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const expense = await prisma.expense.create({
      data: {
        ...newExpense,
        userId: user.id
      }
    })
    return res.status(200).json(expense); 
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    else console.log("Unkown Error");
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function editExpenseById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id); 
    const userId = req.user!.id; 
    if (!id) return res.status(404).json({ error: `no expense with id: ${id}`});  
    const newExpense = req.body; 

    const data: any = {}; 
    if (newExpense.name !== undefined) data.name = newExpense.name;
    if (newExpense.price !== undefined) data.price = newExpense.price;
    if (newExpense.occurance !== undefined) data.occurance = newExpense.occurance;
    if (newExpense.category !== undefined) data.category = newExpense.category;
    if (newExpense.nextChargeDate !== undefined) data.nextChargeDate = newExpense.nextChargeDate;
    if (newExpense.paymentType !== undefined) data.paymentType = newExpense.paymentType;
    if (newExpense.url !== undefined) data.url = newExpense.url;

    const expense = await prisma.expense.update({
      where: {
        id,
        userId
      },
      data: data
    })
    return res.status(200).json(expense); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function deleteExpenseById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id); 
    const userId = req.user!.id; 
    if (!id) return res.status(404).json({ error: `no expense with id: ${id}`});  

    const expense = await prisma.expense.delete({
      where: {
        id,
        userId
      }
    })
    return res.status(200).json(expense); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

