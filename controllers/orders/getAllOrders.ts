import { Request, Response } from "express";
import prisma from "../../lib/prisma";

const getAllOrders = async (req: Request, res: Response) => {
  const orderItems = await prisma.orderItems.findMany({
    include: {
      order: true,
      product: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  res.status(200).json({ orderItems });
};

export default getAllOrders;
