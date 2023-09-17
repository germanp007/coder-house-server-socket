import { Router } from "express";
import path from "path";
import { productsManager } from "../persistencia/index.js";
import { __dirname } from "../utils.js";
import fs from "fs";

// let products = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "/files/productList.json"))
// );
const router = Router();

router.get("/", async (req, res) => {
  const products = await productsManager.getProducts();

  console.log(products);
  res.render("home", { products: products });
});
router.get("/agregar", (req, res) => {
  res.render("agregar");
});
router.get("/realtimeproducts", async (req, res) => {
  res.render("realTime");
});

export { router as viewsRouter };