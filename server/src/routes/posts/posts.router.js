const express = require('express');

const { httpGetAllPosts, httpCreateNewPost } = require('./posts.controller');

const postsRouter = express.Router();

postsRouter.get('/', httpGetAllPosts);
postsRouter.post('/', httpCreateNewPost);

module.exports = postsRouter;
