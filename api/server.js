const express = require("express");

const recipesRouter = require("../routers/recipes/recipesRouter.js");
const ingredientsRouter = require("../routers/ingredients/ingredientsRouter.js");

const server = express();

server.use(express.json());

// routers
server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "is live!" });
});

module.exports = server;
