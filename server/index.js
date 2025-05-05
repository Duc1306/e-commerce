const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const connectDB = require("./config/db");

app.use(cors());
app.options("*", cors());

//middleware
app.use(bodyParser.json());
//Routers
const categoryRoutes = require("./routes/CategoryRoutes");
const productRoutes  = require("./routes/ProductsRoutes");

//api
app.use('/api/category', categoryRoutes);
app.use('/api/products' , productRoutes)
//datavase
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  });
});