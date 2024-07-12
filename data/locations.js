var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Weather = new Schema(
  {
    location:{
      lat:{
        type:Number,
        required:true
      },
      lng:{
        type:Number,
        required:true
      },
      name:{
        type:String,
        required:true
      }
    },
    userID:{
      type:String,
      required:true
    },
    date:{
      type:Date,
      required:false
  }
}
);

module.exports = mongoose.model("location",Weather);
