var router = require("express").Router();
var controller = require("./../controllers/main.js");
var path = require("path");

router.get("/",controller.GetMainPage);
router.post("/search",controller.PostWeatherData);
router.post("/timeline",controller.PostTimeline);

module.exports = router;
