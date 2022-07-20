const express = require('express');
const cors = require('cors');

const categoryRouter = require('./routes/categories/category.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());
app.use(categoryRouter);

module.exports = app;
