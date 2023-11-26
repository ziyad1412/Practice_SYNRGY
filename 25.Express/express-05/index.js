const express = require("express");
const upload = require("./storage");
const app = express();
app.use(express.static("public"));
app.use(express.json());

// Ambil port dari environment variable
// Dengan nilai default 8000
const PORT = process.env.PORT || 8000;

// Bilang ke express kalo kita mau
// pake EJS sebagai view engine

app.put(
  "/api/v1/profiles/:id/picture",
  upload.single("picture"),
  (req, res) => {
    const url = `/uploads/${req.file.filename}`;
    res
      .status(200)
      .json({ message: "Foto berhasil di-upload, silahkan cek URL", url });
  }
);

app.listen(PORT, () => {
  console.log(`Server nyala di http://localhost:${PORT}`);
});
