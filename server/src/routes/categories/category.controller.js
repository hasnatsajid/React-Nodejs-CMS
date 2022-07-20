function getAllCategories(req, res) {
  return res.status(200).json({ category: 'milk' });
}

function addNewCategory(req, res) {
  const category = req.body;
}

module.exports = {
  getAllCategories,
  addNewCategory,
};
