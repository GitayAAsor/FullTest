const express = require("express");
const router = express.Router();

const Author = require("../../models/Author");

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    let author = await Author.findOne({ firstName, lastName });
    if (author) {
      res.status(400).json({ errors: [{ msg: "Author already exists" }] });
    } else {
      author = new Author({
        firstName,
        lastName,
      });

      await author.save();
      res.json(author);
    }
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const author = await Author.find();
    res.json(author);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.find({ _id: req.params.id });
    res.json(author);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
