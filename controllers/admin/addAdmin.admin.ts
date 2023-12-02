import { genSalt, hash } from "bcryptjs";
import { config } from "dotenv";
import { Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { message } from "../../utils";

config();

const addAdmin = async (req: Request, res: Response) => {
  const token = req.cookies["LOGIN_USER"];
  const { name_admin, email_admin, pass_admin } = await req.body;

  if (!token) {
    res.status(400).json(message(400, "Missing token for authentication"));
    return;
  }

  const decodeToken = verify(
    token,
    process.env.SECRET_TOKEN as string
  ) as JwtPayload;

  if (decodeToken.role === "ADMIN") {
    const salt = await genSalt();
    const hashPass = await hash(pass_admin, salt);

    await prisma.users.create({
      data: {
        name: name_admin,
        email: email_admin,
        pass: hashPass,
        role: "ADMIN",
      },
    });
    return res.status(200).json(message(200, "Add admin successfully"));
  }
  return res
    .status(400)
    .json(message(400, "You cannot add admin as user role"));
};

export default addAdmin;
