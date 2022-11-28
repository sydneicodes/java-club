const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  drink: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "pending"
  },
  baristaName: {
    type: String,
    required: true,
    default: ""
  }
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("orders", PostSchema);
