const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const categoryRouter = require('./routes/categories/category.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/categories', categoryRouter);

module.exports = app;
