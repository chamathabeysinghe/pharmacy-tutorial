var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// set up a mongoose model
var DrugSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  availableQuantity: {
    type: Number,
    required: false
  }
});


module.exports = mongoose.model('Drug', DrugSchema);
