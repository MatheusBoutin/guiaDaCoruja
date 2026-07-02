const { Router } = require("express");
const tripController = require("../controllers/TripController.js");

const router = Router();

router.get("/trips", tripController.findAll);
router.post("/trips", tripController.create);
router.get("/trips/:id", tripController.findOne);
router.put("/trips/:id", tripController.update);
router.delete("/trips/:id", tripController.remove);

module.exports = router;