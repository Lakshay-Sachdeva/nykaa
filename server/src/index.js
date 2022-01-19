const express = require("express");

//------------  Controllers ------------------- //
const { login } = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");

const app = express();
app.use(express.json());

app.use("/users", userController);
app.use("/products", productController);

module.exports = app;
