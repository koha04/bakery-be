import { Request, Response } from "express";
import prisma from "../../lib/prisma";

const authenticateMail = async (req: Request, res: Response) => {
  const { name, email, pass } = req.query;

  await prisma.users.create({
    data: {
      name: name as string,
      email: email as string,
      pass: pass as string,
    },
  });

  res.redirect("http://localhost:5173/login");
};

export default authenticateMail;
