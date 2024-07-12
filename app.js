var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var multer = require("multer");
var bcrypt = require("bcrypt");
var session = require("express-session");
var port = process.env.PORT || 3002;
var app = express();
var ejs = require("ejs");
var weather_uri = require("./util/mongo_config.js").uri;
var mongoose = require("mongoose");
var main_router = require("./routes/main.js");

app.set("views","views")
app.set("view engine","ejs");
app.use(express.json());

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(main_router);


mongoose.connect(weather_uri).then((data_res)=>{
  app.listen(port,()=>{
    console.log("Weather App Running");
  });
})
