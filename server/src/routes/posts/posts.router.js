const express = require('express');

const { getAllPosts, createNewPost } = require('./posts.controller');

const postsRouter = express.Router();

postsRouter.get('/', getAllPosts);
postsRouter.post('/', createNewPost);

module.exports = postsRouter;
