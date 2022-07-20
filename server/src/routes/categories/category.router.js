const express = require('express');

const { getAllCategories } = require('./category.controller');

const categoryRouter = express.Router();

categoryRouter.get('/categories', getAllCategories);

module.exports = categoryRouter;
