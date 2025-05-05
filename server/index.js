const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
//Routers
const categoryRoutes = require("./routes/category");
const productRoutes  = require("./routes/products");

//api
app.use('/api/category', categoryRoutes);
app.use('/api/products' , productRoutes)
//datavase
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database connection");
    //Server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
