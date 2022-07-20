function getAllCategories(req, res) {
  return res.status(200).json({ category: 'milk' });
}

module.exports = {
  getAllCategories,
};
