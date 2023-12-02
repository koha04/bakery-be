import { Router } from "express";
import signupForm from "../../controllers/auth/auth.register";
import sendMail from "../../controllers/auth/auth.sendmail";
import authenticateMail from "../../controllers/auth/auth.mail";
import loginForm from "../../controllers/auth/auth.login";
import setCookie from "../../controllers/auth/auth.cookie";
import clearCookie from "../../controllers/auth/auth.clearCookie";
import registerSocial from "../../controllers/auth/auth.social.register";

const route: Router = Router();

route.post("/social/register", registerSocial);
route.post("/register", [signupForm, sendMail]);
route.get("/confirm", authenticateMail);
route.post("/login", loginForm);
route.get("/setcookie", setCookie);
route.get("/clearcookie", clearCookie);

export default route;
