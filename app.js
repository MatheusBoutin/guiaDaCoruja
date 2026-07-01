const express = require("express");
const routes = require("./src/routes");

const app = express();

app.use(express.json());

routes(app);

module.exports = app;