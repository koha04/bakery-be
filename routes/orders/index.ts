import { Router } from "express";
import getAllOrders from "../../controllers/orders/getAllOrders";

const route: Router = Router();

route.get("/allorders", getAllOrders);
  
export default route;
