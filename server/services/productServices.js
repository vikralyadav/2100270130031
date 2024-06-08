const axios = require("axios");

const fetchTopProducts = async (category, options) => {
  const { top, minPrice, maxPrice, sort, order, page } = options;
  const url = `http://20.244.56.144/test/companies/*/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}&sort=${sort}&order=${order}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};

const fetchProductDetails = async (category, productid) => {
  const url = `http://20.244.56.144/test/companies/*/categories/${category}/products/${productid}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { fetchTopProducts, fetchProductDetails };
