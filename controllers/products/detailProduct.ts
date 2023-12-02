import { Request, Response } from "express";
import prisma from "../../lib/prisma";

const detailProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const product = await prisma.bakeryProducts.findFirst({
    where: {
      id: Number(id),
    },
  });
  const amountProduct = await prisma.orderItems.findFirst({
    where: {
      productId: Number(id),
    },
  });

  res.status(200).json({ ...product, amount: amountProduct?.quantity });
};

export default detailProduct;
