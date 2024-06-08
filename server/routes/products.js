const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

router.get("/:category/products", async (req, res) => {
  try {
    const { category } = req.params;
    const { top, minPrice, maxPrice, sort, order, page } = req.query;
    const result = await productService.getTopProducts(category, {
      top,
      minPrice,
      maxPrice,
      sort,
      order,
      page,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:category/products/:productid", async (req, res) => {
  try {
    const { category, productid } = req.params;
    const result = await productService.getProductDetails(category, productid);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
