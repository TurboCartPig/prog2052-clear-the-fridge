// Put setup stuff for mongodb here

const db = connect("localhost:27017/clearthefridge");

db.ingredients.insertMany([
  {
    id: 0,
    name: "Løk",
    unit: "stk",
  },
  {
    id: 1,
    name: "Hvitløk",
    unit: "stk",
  },
  {
    id: 2,
    name: "Hvitløksfedd",
    unit: "stk",
  },
  {
    id: 3,
    name: "Smør",
    unit: "gram",
  },
  {
    id: 4,
    name: "Hvitvin",
    unit: "dl",
  },
  {
    id: 5,
    name: "Rødvin",
    unit: "dl",
  },
  {
    id: 6,
    name: "Kyllingbuljong",
    unit: "dl",
  },
  {
    id: 7,
    name: "Kyllingbuljongterning",
    unit: "stk",
  },
  {
    id: 8,
    name: "Soyasaus",
    unit: "ss",
  },
  {
    id: 9,
    name: "Tomat",
    unit: "stk",
  },
  {
    id: 10,
    name: "Boks tomat",
    unit: "stk",
  },
  {
    id: 11,
    name: "Tomatpuré",
    unit: "ss",
  },
  {
    id: 12,
    name: "Olivenolje",
    unit: "ss",
  },
  {
    id: 13,
    name: "Vann",
    unit: "dl",
  },
  {
    id: 14,
    name: "Timian",
    unit: "ts",
  },
  {
    id: 15,
    name: "Basilikum",
    unit: "ts",
  },
  {
    id: 16,
    name: "Purre",
    unit: "stk",
  },
  {
    id: 17,
    name: "Poteter",
    unit: "gram",
  },
  {
    id: 18,
    name: "Kraft",
    unit: "dl",
  },
  {
    id: 19,
    name: "Fløte",
    unit: "dl",
  },
  {
    id: 20,
    name: "Timiankvast",
    unit: "stk",
  },
  {
    id: 21,
    name: "Laurbærblad",
    unit: "stk",
  },
  {
    id: 22,
    name: "Selleri",
    unit: "gram",
  },
  {
    id: 23,
    name: "Tabasco",
    unit: "ts",
  },
  {
    id: 24,
    name: "Salt",
    unit: "ss",
  },
  {
    id: 25,
    name: "Sukker",
    unit: "gram",
  },
  {
    id: 26,
    name: "Hvetemel",
    unit: "gram",
  },
  {
    id: 27,
    name: "Spinat",
    unit: "gram",
  },
  {
    id: 28,
    name: "Melk",
    unit: "dl",
  },
  {
    id: 29,
    name: "Muskatnøtt",
    unit: "stk",
  },
  {
    id: 30,
    name: "Spareribs",
    unit: "gram",
  },
  {
    id: 31,
    name: "Rødvinseddik",
    unit: "ss",
  },
  {
    id: 32,
    name: "Ketsjup",
    unit: "ss",
  },
  {
    id: 33,
    name: "Worcestersaus",
    unit: "ss",
  },
  {
    id: 34,
    name: "Honning",
    unit: "ss",
  },
  {
    id: 35,
    name: "Dijonsennep",
    unit: "ss",
  },
  {
    id: 36,
    name: "Ingefær",
    unit: "stk",
  },
  {
    id: 37,
    name: "Ingefær revet",
    unit: "ss",
  },
  {
    id: 38,
    name: "Rød chili",
    unit: "ts",
  },
  {
    id: 39,
    name: "Gulrot",
    unit: "stk",
  },
  {
    id: 40,
    name: "Kålrot",
    unit: "stk",
  },
  {
    id: 41,
    name: "Persillerot",
    unit: "stk",
  },
  {
    id: 42,
    name: "Pølse",
    unit: "gram",
  },
  {
    id: 43,
    name: "Spaghetti",
    unit: "gram",
  },
  {
    id: 44,
    name: "Selleristenger",
    unit: "stk",
  },
  {
    id: 45,
    name: "Karbonadedeig",
    unit: "gram",
  },
  {
    id: 46,
    name: "Kjøttdeig",
    unit: "gram",
  },
  {
    id: 47,
    name: "Grønne urter",
    unit: "ss",
  },
  {
    id: 48,
    name: "Bacon",
    unit: "gram",
  },
  {
    id: 49,
    name: "Egg",
    unit: "stk",
  },
  {
    id: 50,
    name: "Parmesan",
    unit: "gram",
  },
  {
    id: 51,
    name: "Ost",
    unit: "gram",
  },
  {
    id: 52,
    name: "Pepper",
    unit: "ss",
  },
  {
    id: 53,
    name: "Mozzarella",
    unit: "stk",
  },
  {
    id: 54,
    name: "Basilikum",
    unit: "ss",
  },
  {
    id: 55,
    name: "Balsamicoeddik",
    unit: "ss",
  },
  {
    id: 56,
    name: "Romanosalat",
    unit: "stk",
  },
  {
    id: 57,
    name: "Sitron",
    unit: "stk",
  },
  {
    id: 58,
    name: "Solsikkeolje",
    unit: "dl",
  },
  {
    id: 59,
    name: "Rapsolje",
    unit: "dl",
  },
  {
    id: 60,
    name: "Ansjosfilet",
    unit: "stk",
  },
  {
    id: 61,
    name: "Brød lyst",
    unit: "gram",
  },
  {
    id: 62,
    name: "Brød grov",
    unit: "gram",
  },
  {
    id: 63,
    name: "Endive",
    unit: "stk",
  },
  {
    id: 64,
    name: "Eple",
    unit: "stk",
  },
  {
    id: 65,
    name: "Pære",
    unit: "stk",
  },
  {
    id: 66,
    name: "Valnøtter",
    unit: "gram",
  },
  {
    id: 67,
    name: "Fetaost",
    unit: "gram",
  }
]);

db.recipes.insertMany([
  {
    name: "Løksuppe",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":0}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":2}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":3}),
        amount: 25,
      },
      {
        name: db.ingredients.findOne({"id":4}),
        amount: 3,
      },
      {
        name: db.ingredients.findOne({"id":6}),
        amount: 7,
      },
      {
        name: db.ingredients.findOne({"id":8}),
        amount: 2,
      },
      
    ],
    instructions: [
      {
        instruction: "Løk, hvitløk, timian og bacon freses i smøret."
      },
      {
        instruction: "Ha på hvitvin, kyllingbuljong og soyasaus."
      },
      {
        instruction: "Kok opp, la putre i 20-30 minutter"
      },
      {
        instruction: "Smak til med nykvernet svart pepper før servering."
      }
    ]
  }
]);
