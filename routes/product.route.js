import express from "express"
import { Product } from "../models/product.model.js";
export const router = express.Router();
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct, deleteProductByName } from "../controllers/product.controller.js";

router.get("/", getProducts)

router.get("/:id", getProduct)

router.post("/", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

router.delete("/:name", deleteProductByName)

export default router