import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
import express, { Express } from "express";
import admin from "./routes/admin";
import auth from "./routes/auth";
import orders from "./routes/orders";
import products from "./routes/products";
import users from "./routes/users";

config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", auth);
app.use("/dashboard", admin);
app.use("/products", products);
app.use("/users", users);
app.use("/orders", orders);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
