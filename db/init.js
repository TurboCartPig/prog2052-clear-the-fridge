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
]);
