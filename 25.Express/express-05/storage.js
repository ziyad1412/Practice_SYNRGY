const multer = require("multer");
const path = require("path");

// Tempat Penyimpanan File
const publicDirectory = path.join(__dirname, "public");
const uploadDirectory = path.join(publicDirectory, "uploads");

// Gimana cara simpen file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix() + path.extname(file.originalname)
    );
  },
});

module.exports = multer({ storage });
