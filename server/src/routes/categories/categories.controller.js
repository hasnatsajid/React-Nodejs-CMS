const { getAllCategories, addNewCategory } = require('../../models/category.model');

function httpGetAllCategories(req, res) {
  return res.status(200).json(getAllCategories());
}

function httpAddNewCategory(req, res) {
  const category = req.body;

  return res.status(200).json(category);
}

module.exports = {
  httpGetAllCategories,
  httpAddNewCategory,
};
