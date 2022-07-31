function getAllPosts(req, res) {
  return res.status(200).json({ post: 'milk' });
}

function createNewPost(req, res) {
  const post = req.body;
  console.log('Req body: ' + post);
}

module.exports = {
  getAllPosts,
  createNewPost,
};
