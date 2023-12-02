import { compare } from "bcryptjs";
import { config } from "dotenv";
import { NextFunction, Request, Response } from "express";
import { sign } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { message } from "../../utils";

config();

const loginForm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = await req.body;
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).json(message(400, "User not found"));
      return;
    }

    const comparePassword = await compare(password, user?.pass);

    if (!comparePassword) {
      res.status(400).json(message(400, "Incorrect password"));
      return;
    }

    const token = sign(
      { id: user?.id, role: user?.role },
      process.env.SECRET_TOKEN as string
    );

    res
      .status(200)
      .json({
        status: 200,
        message: token,
        displayName: user.name,
        photoURL: user.image,
      });
  } catch (error) {
    console.log(`Error in Login: ${error}`);
  }
};

export default loginForm;
