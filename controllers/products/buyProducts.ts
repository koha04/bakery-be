import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import { JwtPayload, verify } from "jsonwebtoken";
import { message } from "../../utils";

const buyProducts = async (req: Request, res: Response) => {
  const token = req.cookies["LOGIN_USER"];
  const products = req.body;
  const decodeToken = verify(
    token,
    process.env.SECRET_TOKEN as string
  ) as JwtPayload;

  await prisma.orders.create({
    data: {
      userId: decodeToken.id,
    },
  });

  const dbProducts = await prisma.bakeryProducts.findMany();

  await products.map(async ({ id, amount }: { id: number; amount: number }) => {
    const order = await prisma.orders.findFirst({
      where: {
        userId: decodeToken.id,
      },
    });

    await prisma.orderItems.create({
      data: {
        productId: id,
        quantity: amount,
        orderId: order?.id ? order.id : 1,
      },
    });

    const selectedProduct = dbProducts.find((item) => item.id === id);

    if (selectedProduct) {
      await prisma.bakeryProducts.update({
        data: {
          quantity: selectedProduct.quantity - amount,
        },
        where: {
          id,
        },
      });
    }
  });

  res.status(200).json(message(200, "OK"));
};

export default buyProducts;
