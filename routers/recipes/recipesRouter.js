const router = require("express").Router();

const Rec = require("./recipes-model.js");

router.get("/", async (req, res) => {
  try {
    const recipes = await Rec.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
