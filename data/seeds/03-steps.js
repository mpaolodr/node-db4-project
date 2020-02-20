exports.seed = function(knex) {
  return knex("steps").insert([
    {
      recipe_id: 1,
      description: "Spread a layer of refried beans on a tortilla",
      step_number: 1
    },
    {
      recipe_id: 1,
      description:
        "Sprinkle a small amount of taco seasoning on top of the bean layer",
      step_number: 2
    },
    {
      recipe_id: 1,
      description:
        "place the pieces of cooked chicken evenly over the tortilla",
      step_number: 3
    },
    {
      recipe_id: 1,
      description:
        "Finish with a thin layer of shredded cheese and place the second tortilla on top",
      step_number: 4
    },
    {
      recipe_id: 1,
      description: "Heat a pan or griddle to medium heat",
      step_number: 5
    },
    {
      recipe_id: 1,
      description:
        "Carefully transfer the quesadilla to the pan and heat until golden brown",
      step_number: 6
    },
    {
      recipe_id: 1,
      description:
        "Then flip it and cook until it’s golden brown on the other side and melt-y in the middle",
      step_number: 7
    },
    {
      recipe_id: 1,
      description: "Serve with salsa and sour cream",
      step_number: 8
    },
    {
      recipe_id: 2,
      description:
        "Start by spreading ranch dressing down the middle of a tortilla",
      step_number: 1
    },
    {
      recipe_id: 2,
      description: "Add the shredded cheese, bacon bits, and chicken",
      step_number: 2
    },
    {
      recipe_id: 2,
      description: "Slice the green pepper and tomato",
      step_number: 3
    },
    {
      recipe_id: 2,
      description: "Add those as well as lettuce and wrap it up!",
      step_number: 4
    },
    {
      recipe_id: 3,
      description:
        "We like our salads with mostly spinach, but use whatever lettuce combo you like best",
      step_number: 1
    },
    {
      recipe_id: 3,
      description:
        "Add all of the toppings and you’ve got yourself a great salad!",
      step_number: 2
    },
    {
      recipe_id: 4,
      description:
        "For each sandwich, spread the first slice of bread with mayo and pesto",
      step_number: 1
    },
    {
      recipe_id: 4,
      description:
        "Add a slice of cheese on top of the mayo and pesto so that it melts together and gets all creamy",
      step_number: 2
    },
    {
      recipe_id: 4,
      description:
        "Place the chicken and tomato on the cheese and top it with the second slice of bread",
      step_number: 3
    },
    {
      recipe_id: 4,
      description:
        "Heat the sandwich on each side in a pan or griddle over medium heat",
      step_number: 4
    },
    {
      recipe_id: 5,
      description: "Thinly slice the raw chicken breast",
      step_number: 1
    },
    {
      recipe_id: 5,
      description: "Cook it in a pan with a bit of oil until done",
      step_number: 2
    },
    {
      recipe_id: 5,
      description: "Add the green pepper to the pan",
      step_number: 3
    },
    {
      recipe_id: 5,
      description:
        "Sprinkle on the taco seasoning and add a small amount of water and let it simmer until the water is gone and the green peppers are cooked",
      step_number: 4
    },
    {
      recipe_id: 5,
      description:
        "Warm up the refried beans and put your tacos together with all of the toppings",
      step_number: 5
    },
    {
      recipe_id: 6,
      description: "Put these sandwiches together any way you like",
      step_number: 1
    },
    {
      recipe_id: 6,
      description: "Use ranch dressing or mayo or a bit of both",
      step_number: 2
    },
    {
      recipe_id: 6,
      description: "Warm up chicken if you want or not",
      step_number: 3
    }
  ]);
};
