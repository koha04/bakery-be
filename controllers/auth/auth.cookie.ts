import { Request, Response } from "express";
import { message } from "../../utils";
import { JwtPayload, verify } from "jsonwebtoken";

const setCookie = (req: Request, res: Response) => {
  const auth = req.headers.authorization;
  const token = auth?.split(" ")[1];

  res.cookie("LOGIN_USER", token, {
    maxAge: 8640000,
    httpOnly: true,
    secure: true,
  });

  const decodeToken = verify(
    token as string,
    process.env.SECRET_TOKEN as string
  ) as JwtPayload;

  res
    .status(200)
    .json(message(200, `Set cookie completely for ${decodeToken.role}`));
};

export default setCookie;
