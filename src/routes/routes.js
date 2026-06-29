const { Router } = require("express");
const passengerController = require("./controllers/PassengerController.js");

const routes = Router();

routes.get("/passengers", passengerController.findAll);
routes.post("/passengers", passengerController.create);
routes.get("/passengers/:id", passengerController.findOne);
routes.put("/passengers/:id", passengerController.update);
routes.delete("/passengers/:id", passengerController.remove);

module.exports = routes;