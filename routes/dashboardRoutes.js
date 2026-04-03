const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/dashboardController");

router.get("/summary", auth, ctrl.summary);
router.get("/categories", auth, ctrl.categoryBreakdown);

module.exports = router;