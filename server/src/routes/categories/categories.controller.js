const { getAllCategories, addNewCategory } = require('../../models/category.model');

async function httpGetAllCategories(req, res) {
  const categories = await getAllCategories();
  return res.status(200).json(categories);
}

async function httpAddNewCategory(req, res) {
  const category = req.body;
  const response = await addNewCategory(category);
  console.log(response);
  return res.status(201).json({ message: 'Category has been added' });
}

module.exports = {
  httpGetAllCategories,
  httpAddNewCategory,
};
