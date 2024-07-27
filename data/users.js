var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectId;
var TextUtil = require("./../util/text.js");

var User = new Schema(
  {
    name:{
      type:String,
      required:false
    },
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    searches:{
      type:Array,
      required:false
    }
  }

);

function FindSearch(searches,current_search){

  for(var i =0; i < searches.length; i++){

    console.log(TextUtil.titleCase(searches[i].location.name), TextUtil.titleCase(current_search));

    if(TextUtil.titleCase(searches[i].location.name) == TextUtil.titleCase(current_search))
    {
      return true;
    }

  }

  return false;

}

User.methods.AddSearch = (user,data,cb) => {

    var didFind = FindSearch(user.searches,data.location.name);

    if(!didFind)  {
      user.searches.push(data);
      user.save();
    }
    else{
      console.log("search already exists")
    }

    cb(user);

  }

module.exports = mongoose.model("users",User);
