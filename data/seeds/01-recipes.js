exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      name: "Chicken Taco Quesadillas"
    },
    {
      name: "Chicken Bacon Ranch Wraps"
    },
    {
      name: "Salad with Chicken and Veggies"
    },
    {
      name: "Chicken Pesto Panini"
    },
    {
      name: "Chicken Tacos"
    },
    {
      name: "Chicken Sandwiches"
    }
  ]);
};
