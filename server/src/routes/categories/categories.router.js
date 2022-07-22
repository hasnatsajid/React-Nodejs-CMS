const express = require('express');

const { httpGetAllCategories, httpAddNewCategory } = require('./categories.controller');

const categoryRouter = express.Router();

categoryRouter.get('/', httpGetAllCategories);
categoryRouter.post('/', httpAddNewCategory);

module.exports = categoryRouter;
