const express = require('express');

const categoriesRouter = require('./categories/categories.router');
const postsRouter = require('./posts/posts.router');

const api = express.Router();

api.use('/v1/categories', categoriesRouter);
api.use('/v1/posts', postsRouter);

module.exports = api;
