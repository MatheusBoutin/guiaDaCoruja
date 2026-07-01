const { Router } = require("express");
const passengerController = require("../controllers/PassengerController.js");

const router = Router();

router.get("/passengers", passengerController.findAll);
router.post("/passengers", passengerController.create);
router.get("/passengers/:id", passengerController.findOne);
router.put("/passengers/:id", passengerController.update);
router.delete("/passengers/:id", passengerController.remove);

module.exports = router;