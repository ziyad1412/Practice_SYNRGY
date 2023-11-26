const express = require("express");
const app = express();

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded());

// function isAdmin
const isAdmin = (req, res, next) => {
  if (req.query.iam === "admin") {
    next();
    return;
  }
  res.status(401).send("Bukan Admin");
};

// GET /api/v1/books?author=Fikri
app.get("/api/v1/books", isAdmin, (req, res) => {
  console.log(req.query);
  res
    .status(200)
    .send(`Kamu sedang mencari buku yang ditulis oleh ${req.query.author}`);
});

// GET /api/v1/books/1
app.get("/api/v1/books/:id", isAdmin, (req, res) => {
  console.log(req.params);
  res.status(200).send(`Kamu sedang mencari buku dengan id ${req.params.id}`);
});

// POST /api/v1/books
app.post("/api/v1/books", isAdmin, (req, res) => {
  console.log(req.body);
  res
    .status(201)
    .send("Terima kasih sudah menambahkan buku di dalam database kami");
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
