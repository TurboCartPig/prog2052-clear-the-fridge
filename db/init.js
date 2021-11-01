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
    unit: "ts",
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
  },
  {
    id: 68,
    name: "Svart pepper",
    unit: "ts"
  },
  {
    id: 69,
    name: "Makaroni",
    unit: "gram"
  },
  {
    id: 70,
    name: "Kjøttbuljongterning",
    unit: "stk"
  },
  {
    id: 71,
    name: "Persille",
    unit: "ts"
  },
  {
    id: 72,
    name: "Blandet salat",
    unit: "gram"
  },
  {
    id: 73,
    name: "valnøttdressing",
    unit: "dl"
  },
]);

db.recipes.insertMany([
  {
    id: 0,
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
      {
        name: db.ingredients.findOne({"id":68}),
        amount: 1,
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
  },
  {
    id: 1,
    name: "Tomatsuppe",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":10}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":0}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":11}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":12}),
        amount: 3,
      },
      {
        name: db.ingredients.findOne({"id":13}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":7}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":14}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":15}),
        amount: 1,
      },
      
    ],
    instructions: [
      {
        instruction: "Begynn med å sette over vann til egg og/eller makaroni hvis du ønsker det som tilbehør, disse koker mens du gjør suppa ferdig."
      },
      {
        instruction: "Fres løk og hvitløk i oljen."
      },
      {
        instruction: "Tilsett tomatpuréen og la den frese et knapt minutt"
      },
      {
        instruction: "Ha i vann og kyllingbuljongterningen, kok opp."
      },
      {
        instruction: "Samtidig kjører du tomatene fra boksene med en stavmikser eller i en blender til en ganske fin puré."
      },
      {
        instruction: "Ha tomatene over i kjelen og kok opp, la det hele småputre i 5 minutter."
      },
      {
        instruction: "Smak til med salt, pepper og ha finhakkede urter før servering, hvis dette er tilgjengelig."
      }
    ]
  },
  {
    id: 2,
    name: "Potet-purresuppe",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":16}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":17}),
        amount: 250,
      },
      {
        name: db.ingredients.findOne({"id":3}),
        amount: 50,
      },
      {
        name: db.ingredients.findOne({"id":18}),
        amount: 13,
      },
      {
        name: db.ingredients.findOne({"id":19}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":20}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":21}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":22}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":23}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":24}),
        amount: 1,
      },
      
    ],
    instructions: [
      {
        instruction: "Hakk opp det hvite av purren, det grønne snittes fint og spares til senere."
      },
      {
        instruction: "Fres det hvite fra purren en stund i smøret."
      },
      {
        instruction: "Tilsett poteter, timian og laurbær."
      },
      {
        instruction: "Hell over kaldt vann, kok opp og skum av, kok videre til alt er helt mørt, tar vanligvis mellom 30 og 40 minutter."
      },
      {
        instruction: "Tilsett fløten og kok opp."
      },
      {
        instruction: "Fjern krydderene og kjør alt glatt i en mikser."
      },
      {
        instruction: "Lag en sellerisalat, hvis det er ønsker."
      },
      {
        instruction: "Smak til med litt tabasco og litt salt."
      }
    ]
  },
  {
    id: 3,
    name: "Spinatsuppe",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":0}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":2}),
        amount: 250,
      },
      {
        name: db.ingredients.findOne({"id":3}),
        amount: 50,
      },
      {
        name: db.ingredients.findOne({"id":26}),
        amount: 25,
      },
      {
        name: db.ingredients.findOne({"id":27}),
        amount: 500,
      },
      {
        name: db.ingredients.findOne({"id":6}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":28}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":19}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":29}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":24}),
        amount: 1,
      },
      
    ],
    instructions: [
      {
        instruction: "Del muskattnøtten i 2, bruker kun halve."
      },
      {
        instruction: "Fres løk og hvitløk i smøret, ha i spinaten."
      },
      {
        instruction: "Når spinaten faller sammen, løfter du den ut."
      },
      {
        instruction: "Dryss melet i kjelen, spe med kraft og fløte."
      },
      {
        instruction: "Kok opp og la småkoke i 10 minutter."
      },
      {
        instruction: "Kjør spinaten til en fin puré sammen med litt av suppa."
      },
      {
        instruction: "Ha den tilbake i kjelen."
      },
      {
        instruction: "Kok opp og smak til."
      }
    ]
  },
  {
    id: 4,
    name: "Barbecue spareribs",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":30}),
        amount: 1000,
      },
      {
        name: db.ingredients.findOne({"id":31}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":32}),
        amount: 6,
      },
      {
        name: db.ingredients.findOne({"id":8}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":33}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":34}),
        amount: 3,
      },
      {
        name: db.ingredients.findOne({"id":35}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":2}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":37}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":38}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":24}),
        amount: 1,
      },
      
    ],
    instructions: [
      {
        instruction: "Ribbebeina kokes i en time i bare vann til de er møre."
      },
      {
        instruction: "Ta ut og avkjøl."
      },
      {
        instruction: "Rør sammen resten av ingrediensene og legg de kokte beina i."
      },
      {
        instruction: "La marinere natten over."
      },
      {
        instruction: "Spre de marinerte beina på stekebrettet."
      },
      {
        instruction: "Stek på 200 grader i ca 30 til 40 minutter."
      },
      {
        instruction: "Bruk en pensel eller skje og pensle marinaden over flere ganger underveis til beina blir glasert."
      },
    ]
  },
  {
    id: 5,
    name: "Pølselapskaus",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":39}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":40}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":41}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":16}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":17}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":70}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":42}),
        amount: 300,
      }, 
    ],
    instructions: [
      {
        instruction: "Del opp kålroten i 4, vi skal bare bruke 1/4. Pølsen kan være for eksempel vossakorv eller kjøttpølse."
      },
      {
        instruction: "Alle grønnsaker skrelles og kuttes i terninger."
      },
      {
        instruction: "Ha gulrot og kålrot i en kjele og dekk med vann."
      },
      {
        instruction: "Kok i 20 minutter, ha så poteter, purre, persillerot og buljong. Kok videre."
      },
      {
        instruction: "Mot slutten, når alt er mørt, har du i pølsene."
      },
      {
        instruction: "Smakes til med salt og pepper."
      },
      {
        instruction: "Server med flatbrød og smør."
      },
    ]
  },
  {
    id: 6,
    name: "Spaghetti Bolognese",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":43}),
        amount: 400,
      },
      {
        name: db.ingredients.findOne({"id":0}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":2}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":39}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":44}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":12}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":45}),
        amount: 400,
      },
      {
        name: db.ingredients.findOne({"id":11}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":10}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":21}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":4}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":18}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":50}),
        amount: 100,
      },
      {
        name: db.ingredients.findOne({"id":24}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":52}),
        amount: 1,
      },
      
    ],
    instructions: [
      {
        instruction: "Varm opp olje i en gryte og stek kjøttet brunt."
      },
      {
        instruction: "Knus og del opp kjøttet med en tresleiv, eller liknende, så det deler seg i små biter."
      },
      {
        instruction: "Tilsett løk og de andre grønnsakene og fres det blankt/gyllent."
      },
      {
        instruction: "Tilsett tomatpuréen og la den frese litt med."
      },
      {
        instruction: "Slå over tomat, hvitvin og kraft, kok opp."
      },
      {
        instruction: "Ha i laurbærblad og kok inntil en hod tjukk konsistens, ca en halvtime. Kan fint gjøres lenger etter ønske."
      },
      {
        instruction: "Smak til med salt, pepper og gjerne timian/basilikum."
      },
      {
        instruction: "Spaghettien kokes som pakken sier. Serveres med kjøttsausen."
      },
      {
        instruction: "Riv sjenerøst med parmesan over, litt olivenolje og godt med pepper."
      },
    ]
  },
  {
    id: 7,
    name: "Spaghetti Carbonara",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":43}),
        amount: 400,
      },
      {
        name: db.ingredients.findOne({"id":58}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":48}),
        amount: 100,
      },
      {
        name: db.ingredients.findOne({"id":2}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":49}),
        amount: 3,
      },
      {
        name: db.ingredients.findOne({"id":19}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":50}),
        amount: 50,
      }, 
      {
        name: db.ingredients.findOne({"id":12}),
        amount: 3,
      },
      {
        name: db.ingredients.findOne({"id":68}),
        amount: 5,
      },
      {
        name: db.ingredients.findOne({"id":24}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":14}),
        amount: 1,
      }, 
      {
        name: db.ingredients.findOne({"id":71}),
        amount: 1,
      },
    ],
    instructions: [
      {
        instruction: "Sett over vann til pasta med salt."
      },
      {
        instruction: "Strimler med bacon stekes på middels temperatur i sitt eget fett til de er sprø og gylne."
      },
      {
        instruction: "Helt på slutten av steketid tilsetter du et par knuste hvitløksfedd som skal smaksette fettet og kjøttet."
      },
      {
        instruction: "Sett til side."
      },
      {
        instruction: "Slå egg i en bolle, pisk inn fløten og bland i revet ost."
      },
      {
        instruction: "Bland sammen og ha i oljen, masse pepper og eventuelt finhakkede urter, som timian og persille."
      },
      {
        instruction: "Når pastaen er kokt, siler du den i et dørslag og har den i en stor, kald panne."
      },
      {
        instruction: "Hell litt olje over."
      },
      {
        instruction: "Vent et minutt, løft litt på pastaen innimellom."
      },
      {
        instruction: "Hell over eggeblandingen og baconet, la det renne gjennom pastaen før du løfter og blander den inn."
      },
      {
        instruction: "Server umiddelbart med ekstra svart pepper, parmesan og litt olje til dem som trenger det."
      },
    ]
  },
  {
    id: 8,
    name: "Capresesalat",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":9}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":53}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":15}),
        amount: 10,
      },
      {
        name: db.ingredients.findOne({"id":24}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":12}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":55}),
        amount: 2,
      },
    ],
    instructions: [
      {
        instruction: "Skjær mozzarella i skiver og anrett tomat og mozzarella i taksteinsmønster på et fat."
      },
      {
        instruction: "Riv eller grovhakk basilikum og ha på."
      },
      {
        instruction: "Dryss over salt og olivenolje."
      },
      {
        instruction: "Ha eventuelt på noen dråper balsamico eller annen syre."
      },
    ]
  },
  {
    id: 9,
    name: "Cæsarsalat",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":56}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":49}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":59}),
        amount: 2,
      },
      {
        name: db.ingredients.findOne({"id":57}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":2}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":33}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":60}),
        amount: 4,
      },
      {
        name: db.ingredients.findOne({"id":50}),
        amount: 100,
      },
      {
        name: db.ingredients.findOne({"id":61}),
        amount: 100,
      },
    ],
    instructions: [
      {
        instruction: "Fjern eventulle stygge blader på salaten, vask resten godt og tørk i en salatslynge eller på et håndle."
      },
      {
        instruction: "Visp sammen eggeplommene, sitrosaften, worcestersaus og hvitløk."
      },
      {
        instruction: "Ha i ansjosen og halvparten av parmesanen, og spe med olje i en tynn stråle under pisking."
      },
      {
        instruction: "Det er smart om ingrediensene i majonesen har lik temperatur, ellers kan den skille seg."
      },
      {
        instruction: "Smakes til med salt og pepper."
      },
      {
        instruction: "Hvis dressingen blir for tjukk, kan du spe med litt vann."
      },
      {
        instruction: "Brødet kuttes i terninger eller staver som stekes sprø i litt smør."
      },
      {
        instruction: "Vend salaten i dressing, server i dype boller, legg krutongene over og dryss parmesan på toppen."
      },
    ]
  },
  {
    id: 10,
    name: "Salat med feta, valnøtt og pærer",
    ingredients: [
      {
        name: db.ingredients.findOne({"id":72}),
        amount: 200,
      },
      {
        name: db.ingredients.findOne({"id":63}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":64}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":65}),
        amount: 1,
      },
      {
        name: db.ingredients.findOne({"id":66}),
        amount: 50,
      },
      {
        name: db.ingredients.findOne({"id":67}),
        amount: 200,
      },
      {
        name: db.ingredients.findOne({"id":73}),
        amount: 1,
      },
    ],
    instructions: [
      {
        instruction: "Epler og pærer skrelles og skjæres i tynne strimler."
      },
      {
        instruction: "Anrett blandet salat med endive i skåler."
      },
      {
        instruction: "Fordel eple og pære, legg over valnøtter og fetaost som er smuldret opp."
      },
      {
        instruction: "Lag dressing og hell over."
      },
    ]
  },
]);
