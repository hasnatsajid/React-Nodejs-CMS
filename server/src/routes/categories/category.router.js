const express = require('express');

const { getAllCategories } = require('./category.controller');

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);

module.exports = categoryRouter;
