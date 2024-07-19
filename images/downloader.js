const fs = require("fs");
const path = require("path");
const https = require("https");

const images = [
  "https://m.media-amazon.com/images/I/314wvmoNUuL.jpg",
  "https://m.media-amazon.com/images/I/31RCpLRLtsL.jpg",
  "https://m.media-amazon.com/images/I/31guvZyHHxL.jpg",
  "https://m.media-amazon.com/images/I/31wNY1LRc1L.jpg",
  "https://m.media-amazon.com/images/I/41hEOmOpdKL.jpg",
];

for (let i = 0; i < images.length; i++) {
  https
    .get(images[i], (res) => {
      res.pipe(fs.WriteStream(path.join(__dirname, `img-${Date.now()}.jpg`)));
    })
    .end();
}
