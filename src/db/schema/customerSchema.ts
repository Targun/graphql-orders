const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const customerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }],
});
