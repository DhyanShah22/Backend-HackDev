const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
require('dotenv').config();

const SellerRoutes = require('./Routes/sellAuthRoutes');
const sellpath = require('./Routes/sellRoutes');
const app = express();


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use(morgan('dev'))
app.use('/api/Seller', SellerRoutes);
app.use('/api/sellProp', sellpath);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB and listening to port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
