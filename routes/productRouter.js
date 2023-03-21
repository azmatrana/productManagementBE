const productRouter = require("express").Router();
const {
  getProducts,
  createAllProducts,
} = require("../controllers/productController");

productRouter.get("/products", getProducts);
productRouter.post("/products", createAllProducts);

module.exports = {
  productRouter,
};
