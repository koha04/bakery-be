import { genSalt, hash } from "bcryptjs";
import { NextFunction, Request, Response } from "express";
import prisma from "../../lib/prisma";
import { message } from "../../utils/index";

const signupForm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = await req.body;
    const salt = await genSalt();
    const hashPassword = await hash(password, salt);
    const user = await prisma.users.findFirst({
      where: {
        OR: [{ name: username }, { email }],
      },
    });

    if (user?.email ?? user?.name) {
      const name = user.name === username ? user.name : null;
      const mail = user.email === email ? user.email : null;

      res.status(400).json(message(400, `${mail ?? name} has been registered`));
      return;
    }

    res.locals = { ...req.body, password: hashPassword };
    next();
  } catch (error) {
    console.log(`Error in Sign up: ${error}`);
  }
};

export default signupForm;
