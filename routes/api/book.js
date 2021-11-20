const express = require("express");
const router = express.Router();

const Book = require("../../models/Book");

router.post("/", async (req, res) => {
  const { bookName, isbn, author } = req.body;
  try {
    let book = await Book.findOne({ bookName });
    if (book) {
      res.status(400).json({ errors: [{ msg: "Book already exists" }] });
    } else {
      book = new Book({
        bookName,
        isbn,
        author,
      });

      await book.save();
      res.json(book);
    }
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.find({ _id: req.params.id });
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
