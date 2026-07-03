const { Router } = require("express");
const paymentController = require("../controllers/paymentController");

const router = Router();

router.get("/payments", paymentController.findAll);
router.post("/payments", paymentController.create);
router.get("/payments/:id", paymentController.findOne);
router.put("/payments/:id", paymentController.update);
router.delete("/payments/:id", paymentController.remove);

module.exports = router;