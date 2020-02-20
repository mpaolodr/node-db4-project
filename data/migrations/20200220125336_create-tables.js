exports.up = function(knex) {
  return (
    knex.schema
      .createTable("recipes", col => {
        col.increments();
        col
          .text("name", 255)
          .notNullable()
          .unique()
          .index();
      })

      //   ingredients table
      .createTable("ingredients", col => {
        col.increments();
        col
          .text("name", 255)
          .notNullable()
          .unique()
          .index();
      })

      //   steps table
      .createTable("steps", col => {
        col.increments();
        col.text("description").notNullable();
        col.integer("step_number").notNullable();
        col
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })

      //   recipe_ingredients
      .createTable("recipe_ingredients", col => {
        col
          .integer("recipe_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("recipes")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        col
          .integer("ingredient_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("ingredients")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");

        col.integer("quantity").notNullable();
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
