const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const { dashboard,monthlyReport,monthlyComparison } = require("../controllers/reportController");

router.get("/dashboard", auth, dashboard);
router.get("/comparison", auth, monthlyComparison);
router.get("/monthly", auth, monthlyReport);

module.exports = router;