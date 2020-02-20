const db = require("../../data/db-config.js");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes")
    .where({ id })
    .first()
    .then(recipe => {
      return db("recipe_ingredients as ri")
        .join("recipes as r", "ri.recipe_id", "r.id")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .select("i.id", "i.name as Ingredient", "ri.quantity")
        .where({ "ri.recipe_id": id })
        .orderBy("ri.ingredient_id");
    });
}

function getInstructions(id) {
  return db("recipes")
    .where({ id })
    .first()
    .then(recipe => {
      return db("steps as s")
        .join("recipes as r", "s.recipe_id", "r.id")
        .select(
          "r.name as Recipe Name",
          "s.step_number as Step Number",
          "s.description as Description"
        )
        .where({ "s.recipe_id": id })
        .orderBy("s.step_number", "asc");
    });
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
