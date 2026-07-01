const express = require("express");
const passengerRoutes = require("./passengerRoutes");

module.exports = (app) => {
  app.use(
    express.json(),
    passengerRoutes
  );
};