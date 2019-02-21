const stream = require("express").Router();

stream.get("/", (req, res) => {
  res.send({ hi: "streams" });
});

module.exports = stream;
