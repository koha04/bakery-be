import { config } from "dotenv";
import { Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { message } from "../../utils";

config();

const addProduct = async (req: Request, res: Response) => {
  const token = req.cookies["LOGIN_USER"];
  const {
    name_product,
    imageurl,
    desc_product,
    price_product,
    quantity_product,
    type_product,
  } = await req.body;

  let categoryId: number = 1;

  if (!token) {
    res.status(400).json(message(400, "Missing token for authentication"));
    return;
  }

  const decodeToken = verify(
    token,
    process.env.SECRET_TOKEN as string
  ) as JwtPayload;

  switch (type_product) {
    case "CHEESE_CAKE":
      categoryId = 2;
      break;
    case "DRINK":
      categoryId = 3;
      break;
    default:
      return categoryId;
  }

  if (decodeToken.role === "ADMIN") {
    await prisma.bakeryProducts.create({
      data: {
        name: name_product,
        imageUrl: imageurl,
        price: price_product,
        description: desc_product,
        quantity: quantity_product,
        type: type_product,
        categoryId: 1,
      },
    });
    return res.status(200).json(message(200, "Add product successfully"));
  }
  return res
    .status(400)
    .json(message(400, "You cannot add product as user role"));
};

export default addProduct;
