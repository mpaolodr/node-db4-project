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

router.get("/:id/shoppinglist", async (req, res) => {
  const { id } = req.params;

  try {
    const list = await Rec.getShoppingList(id);

    if (list.length !== 0) {
      res.status(200).json(list);
    } else {
      res.status(404).json({ errorMessage: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;

  try {
    const instructions = await Rec.getInstructions(id);

    if (instructions.length !== 0) {
      res.status(200).json(instructions);
    } else {
      res.status(404).json({ errorMessage: "Recipe not found" });
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = router;
