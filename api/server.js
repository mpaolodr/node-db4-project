const express = require("express");

const recipesRouter = require("../routers/recipes/recipesRouter.js");

const server = express();

server.use(express.json());

// routers
server.use("/api/recipes", recipesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "is live!" });
});

module.exports = server;
