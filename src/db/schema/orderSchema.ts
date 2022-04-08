const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const orderSchema = new mongoose.Schema({
  total: {
    type: Number,
  },
  customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
});
