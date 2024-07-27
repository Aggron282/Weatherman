var router = require("express").Router();
var controller = require("./../controllers/main.js");
var path = require("path");

router.get("/",controller.GetMainPage);
router.get("/searches",controller.GetPastSearches);

router.get("/login",controller.GetLoginPage);
router.get("/create_account",controller.GetCreateAccountPage);
router.post("/login",controller.Login);
router.post("/create_account",controller.CreateAccount);
router.post("/search",controller.PostWeatherData);
router.post("/timeline",controller.PostTimeline);

module.exports = router;
