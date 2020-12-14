const express = require("express");
const router = express.Router();
const homePage = require("./controllers/homePage");
const prograTips = require("./controllers/programacionTips");

router.get("/", homePage.home);
router.post("/tips-programacion", prograTips.redirect);
router.get("/tips-programacion", prograTips.redirect);

module.exports = router;
