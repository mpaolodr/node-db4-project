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

module.exports = {
  getRecipes,
  getShoppingList
};
