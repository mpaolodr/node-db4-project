exports.seed = function(knex) {
  return knex("ingredients").insert([
    {
      name: "Boneless Skinless Chicken Breast"
    },
    {
      name: "Bacon Bits"
    },
    {
      name: "Tortillas"
    },
    {
      name: "Bread"
    },
    {
      name: "Cheddar Cheese"
    },
    {
      name: "Deli Sliced Cheese"
    },
    {
      name: "Taco Seasoning"
    },
    {
      name: "Salsa"
    },
    {
      name: "Refried Beans"
    },
    {
      name: "Sour Cream"
    },
    {
      name: "Ranch Dressing"
    },
    {
      name: "Mayonnaise"
    },
    {
      name: "Pesto"
    },
    {
      name: "Lettuce/Spinach"
    },
    {
      name: "Tomatoes"
    },
    {
      name: "Green Pepper"
    }
  ]);
};
