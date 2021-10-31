// Put setup stuff for mongodb here

const db = connect("localhost:27017/clearthefridge");

db.ingredients.insertMany([
  {
    name: "Gulrot",
    unit: "Stykk",
  },
  {
    name: "Løk",
    unit: "Stykk",
  },
  {
    name: "Tomat",
    unit: "kg",
  }
]);

db.recipes.insertMany([
  {
    name: "Recipe 1",
    ingredients: [
      {
      name: "Tomat",
      amount: "2 stk",
      }
    ],
    instructions: [
      {
        instruction: "Gjør dette"
      }
    ]
  }
]);
