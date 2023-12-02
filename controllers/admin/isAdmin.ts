import { config } from "dotenv";
import { Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { message } from "../../utils";

config();

const isAdmin = (req: Request, res: Response) => {
  const token = req.cookies["LOGIN_USER"];

  if (!token) {
    res.status(400).json(message(400, "Missing token for authentication"));
    return;
  }

  const decodeToken = verify(
    token,
    process.env.SECRET_TOKEN as string
  ) as JwtPayload;

  if (decodeToken.role === "ADMIN") {
    res.status(200).json({ redirect: "/dashboard", role: "admin" });
  } else {
    res.status(400).json({ redirect: "/", role: "user" });
  }
};

export default isAdmin;
