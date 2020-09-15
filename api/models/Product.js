const mongoose = require('mongoose');


const ProductSchema = mongoose.Schema({
  product_ame:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  price:{
    type: Double,
    require: true
  },
  create_time:{
    type: Date,
    default: Date.now
  },
});


module.exports = mongoose.model('Product', ProductSchema);