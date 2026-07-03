const express = require("express");
const passengerRoutes = require("./passengerRoutes.js");
const tripRoutes = require("./tripRoutes.js");
const paymentsRoutes = require("./paymentsRoutes.js")

module.exports = (app) => {
  app.use(
    express.json(),
    passengerRoutes,
    tripRoutes,
    paymentsRoutes
  );
};