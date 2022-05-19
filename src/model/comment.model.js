const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);
module.exports.CommentModel = mongoose.model("Comment", CommentSchema);