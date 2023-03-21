const { Product } = require("../models");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Product.findAll();
    if (products) res.status(200).json({ message: "success", products });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

const createAllProducts = asyncHandler(async (req, res) => {
  try {
    const { name, price, createDate } = req.body;
    console.log(req.body);
    const product = await Product.create({
      name: name,
      price: price,
      createDate: createDate,
    });

    if (product) res.status(200).json({ message: "success", product });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = {
  getProducts,
  createAllProducts,
};
