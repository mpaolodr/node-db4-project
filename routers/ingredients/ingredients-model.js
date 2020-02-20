const db = require("../../data/db-config.js");

function getIngredientRecipes(id) {
  return db("ingredients")
    .where({ id })
    .first()
    .then(ing => {
      return db("recipe_ingredients as ri")
        .join("recipes as r", "ri.recipe_id", "r.id")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .select("r.id", "r.name")
        .where({ "i.id": id });
    });
}

module.exports = { getIngredientRecipes };
