const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("book", Book);
