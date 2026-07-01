const express = require("express");
const passenger = require("./passengerRoutes");

module.exports = (app) => {
  app.use(
    express.json(),
    passenger
  );
};