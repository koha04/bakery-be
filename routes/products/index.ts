import { Router } from "express";
import getAllProducts from "../../controllers/products/getAllProducts";
import buyProducts from "../../controllers/products/buyProducts";
import detailProduct from "../../controllers/products/detailProduct";

const route: Router = Router();

route.get("/allproducts", getAllProducts);
route.get("/detail/:id", detailProduct);
route.post("/buyproducts", buyProducts);
  
export default route;
