import { Request, Response } from "express";

const clearCookie = (req: Request, res: Response) => {
  res.clearCookie("LOGIN_USER")
  res.end()
};

export default clearCookie;
