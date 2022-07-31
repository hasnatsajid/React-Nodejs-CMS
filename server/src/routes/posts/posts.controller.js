function httpGetAllPosts(req, res) {
  return res.status(200).json({ post: 'milk' });
}

function httpCreateNewPost(req, res) {
  const post = req.body;
  return res.status(200).json(post);
}

module.exports = {
  httpGetAllPosts,
  httpCreateNewPost,
};
