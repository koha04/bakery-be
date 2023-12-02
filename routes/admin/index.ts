import { Router } from "express";
import isAdmin from "../../controllers/admin/isAdmin";
import addAdmin from "../../controllers/admin/addAdmin.admin";
import addProduct from "../../controllers/admin/addProduct.admin";

const route: Router = Router()

route.get("/", isAdmin)
route.post("/addProduct", addProduct)
route.post("/addAdmin", addAdmin)

export default route