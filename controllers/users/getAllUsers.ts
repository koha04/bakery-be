import { Request, Response } from "express";
import prisma from "../../lib/prisma";

const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.users.findMany();

  res.status(200).json({ users });
};

export default getAllUsers;
