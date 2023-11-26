const express = require("express");
const multer = require("multer");
const path = require("path");

const uploadDirectory = path.join(__dirname, "public", "profiles");

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (_, _, cb) {
    cb(null, "profile.png");
  },
});
const upload = multer({ storage });
const app = express();
// express json encoded static
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

// view engine ejs
app.set("view engine", "ejs");

// render html
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// post
app.post("/", upload.single("profile"), (_, res) => {
  res.send({ message: "Upload berhasil" });
});

app.listen(PORT, () => {
  console.log(`Express nyala di http://localhost:${PORT}`);
});
