import { Router } from "express";
import getAllUsers from "../../controllers/users/getAllUsers";

const route: Router = Router();

route.get("/allusers", getAllUsers);
  
export default route;
