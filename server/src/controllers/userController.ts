import { prisma } from "../database/prismaClient";
import { Request, Response } from "express";

export async function getUserSettings(req: Request, res: Response) {
  try {
    // const { id } = req.user; 
    const id = req.user!.id; 
    const userSettings = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (userSettings === null) return res.status(401).json({ error: `could not find user settings with id: ${id}`});
    return res.status(200).json(userSettings); 
  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

// no post, use upsert instead as userData is tied to auth user.

export async function editUserSettings(req: Request, res: Response) {
  try {
    // const { id } = req.user; 
    const user = req.user; 
    const newUserSettings = req.body; 
    if (!newUserSettings) return res.status(400).json({ error: "no request body"});

    const data : any = {}; 
    
    data.id = user.id;
    data.email = user.email; 

    if (newUserSettings.name !== undefined) data.name = newUserSettings.name;
    if (newUserSettings.theme !== undefined) data.theme = newUserSettings.theme; 
    if (newUserSettings.currency !== undefined) data.currency = newUserSettings.currency; 

    const userSettings = await prisma.user.upsert({
      where: { id: data.id },
      create: data,
      update: data
    })

    return res.status(200).json(userSettings); 

  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}

export async function deleteUserSettings(req: Request, res: Response) {
  try {
    // const { id } = req.user; 
    const user = req.user; 
    
    const userSettings = await prisma.user.delete({
      where: {id: user.id}
    })

    return res.status(200).json(userSettings); 

  } catch (err) {
    return res.status(500).json({ error: "there was an internal server error"}); 
  }
}



// // get user data
// userRouter.get('/users/:id');

// // create user data
// userRouter.post('/users');

// // edit user data (email handled through supabase auth client)
// userRouter.put('/users/:id');

// // delete user data 
// userRouter.delete('/users/:id');