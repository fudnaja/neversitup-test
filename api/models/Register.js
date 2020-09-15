const mongoose = require('mongoose');


const RegisterSchema = mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  age:{
    type: Number,
    require: true
  },
  mobile:{
    type: String,
    require: true
  },
  registered:{
    type: Date,
    default: Date.now
  },
  account:{
    type: String,
    require: true
  },
  pwd:{
    type: String,
    require: true
  }
});


module.exports = mongoose.model('Register', RegisterSchema);