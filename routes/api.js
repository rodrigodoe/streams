const api = require("express").Router();
const streamRoutes = require("./stream");

api.use("/streams", streamRoutes);

module.exports = api;
