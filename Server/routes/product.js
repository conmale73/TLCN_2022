const express = require("express");
const router = express.Router();
const multer = require("multer");

const Product = require("../models/Product");
const Category = require("../models/Category");

router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

router.get("/:slug", async (req, res) => {
    try {
        const product = await Product.find({slug: req.params.slug});
        res.json({ success: true, product });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error: Can't get product by slug" });
      }
});
router.get("/category/", async (req, res) => {
  try {
    const products = await Product.find({category: req.params.id});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;