function getAllPosts(req, res) {
  return res.status(200).json({ post: 'milk' });
}

function addNewPosts(req, res) {
  const post = req.body;
}

module.exports = {
  getAllPosts,
  addNewPosts,
};
