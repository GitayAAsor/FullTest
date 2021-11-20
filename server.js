const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use("/api/books", require("./routes/api/books"));
app.use("/api/book", require("./routes/api/book"));

app.use("/api/authors", require("./routes/api/authors"));
app.use("/api/author", require("./routes/api/author"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
