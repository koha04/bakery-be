import { Request, Response } from "express";
import prisma from "../../lib/prisma";

const getAllProducts = async (req: Request, res: Response) => {
  const products = await prisma.bakeryProducts.findMany();

  res.status(200).json({ products });
};

export default getAllProducts;
