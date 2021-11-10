// Put setup stuff for mongodb here

const db = connect("localhost:27017/clearthefridge");

// Insert all ingredients
db.ingredients.insertMany([
	{
		id: 0,
		name: "Løk",
		unit: "stk",
		img: "onion.svg",
	},
	{
		id: 1,
		name: "Hvitløk",
		unit: "stk",
		img: "garlic.svg",
	},
	{
		id: 2,
		name: "Hvitløksfedd",
		unit: "stk",
		img: "garlic.svg",
	},
	{
		id: 3,
		name: "Smør",
		unit: "gram",
		img: "butter.svg",
	},
	{
		id: 4,
		name: "Hvitvin",
		unit: "dl",
		img: "white-wine.svg",
	},
	{
		id: 5,
		name: "Rødvin",
		unit: "dl",
		img: "red-wine.svg",
	},
	{
		id: 6,
		name: "Kyllingbuljong",
		unit: "dl",
		img: "broth.svg",
	},
	{
		id: 7,
		name: "Kyllingbuljongterning",
		unit: "stk",
		img: "broth.svg",
	},
	{
		id: 8,
		name: "Soyasaus",
		unit: "ss",
		img: "soy-sauce.svg"
	},
	{
		id: 9,
		name: "Tomat",
		unit: "stk",
		img: "tomato.svg",
	},
	{
		id: 10,
		name: "Boks tomat",
		unit: "stk",
		img: "diced-tomato.svg",
	},
	{
		id: 11,
		name: "Tomatpuré",
		unit: "ss",
		img: "diced-tomato.svg",
	},
	{
		id: 12,
		name: "Olivenolje",
		unit: "ss",
		img: "olive-oil.svg"
	},
	{
		id: 13,
		name: "Vann",
		unit: "dl",
		img: "water.svg",
	},
	{
		id: 14,
		name: "Timian",
		unit: "ts",
		img: "thyme.svg",
	},
	{
		id: 15,
		name: "Basilikum",
		unit: "ts",
		img: "basil.svg",
	},
	{
		id: 16,
		name: "Purre",
		unit: "stk",
		img: "leek.svg",
	},
	{
		id: 17,
		name: "Poteter",
		unit: "gram",
		img: "potato.svg",
	},
	{
		id: 18,
		name: "Kraft",
		unit: "dl",
		img: "broth.svg",
	},
	{
		id: 19,
		name: "Fløte",
		unit: "dl",
		img: "cream.svg",
	},
	{
		id: 20,
		name: "Timiankvast",
		unit: "stk",
		img: "thyme.svg",
	},
	{
		id: 21,
		name: "Laurbærblad",
		unit: "stk",
		img: "laurel.svg",
	},
	{
		id: 22,
		name: "Selleri",
		unit: "gram",
		img: "celery.svg",
	},
	{
		id: 23,
		name: "Tabasco",
		unit: "ts",
		img: "tabasco.svg",
	},
	{
		id: 24,
		name: "Salt",
		unit: "ts",
		img: "salt.svg",
	},
	{
		id: 25,
		name: "Sukker",
		unit: "gram",
		img: "sugar.svg",
	},
	{
		id: 26,
		name: "Hvetemel",
		unit: "gram",
		img: "flour.svg",
	},
	{
		id: 27,
		name: "Spinat",
		unit: "gram",
		img: "spinach.svg",
	},
	{
		id: 28,
		name: "Melk",
		unit: "dl",
		img: "milk.svg",
	},
	{
		id: 29,
		name: "Muskatnøtt",
		unit: "stk",
		img: "nutmeg.svg",
	},
	{
		id: 30,
		name: "Spareribs",
		unit: "gram",
		img: "ribs.svg",
	},
	{
		id: 31,
		name: "Rødvinseddik",
		unit: "ss",
		img: "red-winegar.svg",
	},
	{
		id: 32,
		name: "Ketsjup",
		unit: "ss",
		img: "ketchup.svg",
	},
	{
		id: 33,
		name: "Worcestersaus",
		unit: "ss",
		img: "black-sauce.svg",
	},
	{
		id: 34,
		name: "Honning",
		unit: "ss",
		img: "honey.svg",
	},
	{
		id: 35,
		name: "Dijonsennep",
		unit: "ss",
		img: "mustard.svg",
	},
	{
		id: 36,
		name: "Ingefær",
		unit: "stk",
		img: "ginger.svg",
	},
	{
		id: 37,
		name: "Ingefær revet",
		unit: "ss",
		img: "ginger.svg",
	},
	{
		id: 38,
		name: "Rød chili",
		unit: "ts",
		img: "chili.svg",
	},
	{
		id: 39,
		name: "Gulrot",
		unit: "stk",
		img: "carrot.svg",
	},
	{
		id: 40,
		name: "Kålrot",
		unit: "stk",
		img: "turnip.svg"
	},
	{
		id: 41,
		name: "Persillerot",
		unit: "stk",
		img: "turnip.svg",
	},
	{
		id: 42,
		name: "Pølse",
		unit: "gram",
		img: "sausage.svg",
	},
	{
		id: 43,
		name: "Spaghetti",
		unit: "gram",
		img: "spagetti.svg",
	},
	{
		id: 44,
		name: "Selleristenger",
		unit: "stk",
		img: "celery.svg",
	},
	{
		id: 45,
		name: "Karbonadedeig",
		unit: "gram",
		img: "beef.svg",
	},
	{
		id: 46,
		name: "Kjøttdeig",
		unit: "gram",
		img: "beef.svg",
	},
	{
		id: 47,
		name: "Grønne urter",
		unit: "ss",
		img: "herb.svg",
	},
	{
		id: 48,
		name: "Bacon",
		unit: "gram",
		img: "bacon.svg",
	},
	{
		id: 49,
		name: "Egg",
		unit: "stk",
		img: "egg.svg",
	},
	{
		id: 50,
		name: "Parmesan",
		unit: "gram",
		img: "cheese.svg",
	},
	{
		id: 51,
		name: "Ost",
		unit: "gram",
		img: "cheese.svg",
	},
	{
		id: 52,
		name: "Pepper",
		unit: "ss",
		img: "pepper.svg",
	},
	{
		id: 53,
		name: "Mozzarella",
		unit: "stk",
		img: "mozarella.svg",
	},
	{
		id: 54,
		name: "Rød løk",
		unit: "stk",
		img: "onion-red.svg",
	},
	{
		id: 55,
		name: "Balsamicoeddik",
		unit: "ss",
		img: "balsamic-vinegar.svg",
	},
	{
		id: 56,
		name: "Romanosalat",
		unit: "stk",
		img: "salad.svg",
	},
	{
		id: 57,
		name: "Sitron",
		unit: "stk",
		img: "lemon.svg",
	},
	{
		id: 58,
		name: "Solsikkeolje",
		unit: "dl",
		img: "sunflower-oil.svg",
	},
	{
		id: 59,
		name: "Rapsolje",
		unit: "dl",
		img: "rapeseed-oil.svg",
	},
	{
		id: 60,
		name: "Ansjosfilet",
		unit: "stk",
		img: "anchovy.svg",
	},
	{
		id: 61,
		name: "Brød lyst",
		unit: "gram",
		img: "bread.svg",
	},
	{
		id: 62,
		name: "Brød grov",
		unit: "gram",
		img: "bread.svg",
	},
	{
		id: 63,
		name: "Endive",
		unit: "stk",
		img: "salad.svg",
	},
	{
		id: 64,
		name: "Eple",
		unit: "stk",
		img: "apple.svg",
	},
	{
		id: 65,
		name: "Pære",
		unit: "stk",
		img: "pear.svg",
	},
	{
		id: 66,
		name: "Valnøtter",
		unit: "gram",
		img: "walnut.svg",
	},
	{
		id: 67,
		name: "Fetaost",
		unit: "gram",
		img: "feta.svg",
	},
	{
		id: 68,
		name: "Svart pepper",
		unit: "ts",
		img: "pepper.svg",
	},
	{
		id: 69,
		name: "Makaroni",
		unit: "gram",
		img: "macaroni.svg",
	},
	{
		id: 70,
		name: "Kjøttbuljongterning",
		unit: "stk",
		img: "broth.svg",
	},
	{
		id: 71,
		name: "Persille",
		unit: "ts",
		img: "parsley.svg",
	},
	{
		id: 72,
		name: "Blandet salat",
		unit: "gram",
		img: "salad.svg",
	},
	{
		id: 73,
		name: "valnøttdressing",
		unit: "dl",
		img: "random-sauce.svg",
	},
]);

db.ingredients.find().forEach((i) => {
	db.ingredients.updateOne({ _id: i._id }, { $set: { ngrams: ngrams(i.name, 2) } });
});

// Insert all recipes
// NOTE: Needs to be after `insert all ingredients`
db.recipes.insertMany([
	{
		id: 0,
		name: "Løksuppe",
		ingredients: [
			{
				id: 0,
				amount: 2,
			},
			{
				id: 2,
				amount: 2,
			},
			{
				id: 3,
				amount: 25,
			},
			{
				id: 4,
				amount: 3,
			},
			{
				id: 6 ,
				amount: 7,
			},
			{
				id: 8 ,
				amount: 2,
			},
			{
				id: 68 ,
				amount: 1,
			},
		],
		instructions: [
			"Løk, hvitløk, timian og bacon freses i smøret.",
			"Ha på hvitvin, kyllingbuljong og soyasaus.",
			"Kok opp, la putre i 20-30 minutter",
			"Smak til med nykvernet svart pepper før servering.",
		],
	},
	{
		id: 1,
		name: "Tomatsuppe",
		ingredients: [
			{
				id: 10 ,
				amount: 2,
			},
			{
				id: 0 ,
				amount: 1,
			},
			{
				id: 11 ,
				amount: 2,
			},
			{
				id: 12 ,
				amount: 3,
			},
			{
				id: 13 ,
				amount: 2,
			},
			{
				id: 7 ,
				amount: 1,
			},
			{
				id: 14 ,
				amount: 1,
			},
			{
				id: 15 ,
				amount: 1,
			},
		],
		instructions: [
			"Begynn med å sette over vann til egg og/eller makaroni hvis du ønsker det som tilbehør, disse koker mens du gjør suppa ferdig.",
			"Fres løk og hvitløk i oljen.",
			"Tilsett tomatpuréen og la den frese et knapt minutt",
			"Ha i vann og kyllingbuljongterningen, kok opp.",
			"Samtidig kjører du tomatene fra boksene med en stavmikser eller i en blender til en ganske fin puré.",
			"Ha tomatene over i kjelen og kok opp, la det hele småputre i 5 minutter.",
			"Smak til med salt, pepper og ha finhakkede urter før servering, hvis dette er tilgjengelig.",
		],
	},
	{
		id: 2,
		name: "Potet-purresuppe",
		ingredients: [
			{
				id: 16 ,
				amount: 4,
			},
			{
				id: 17 ,
				amount: 250,
			},
			{
				id: 3 ,
				amount: 50,
			},
			{
				id: 18 ,
				amount: 13,
			},
			{
				id: 19 ,
				amount: 4,
			},
			{
				id: 20 ,
				amount: 1,
			},
			{
				id: 21 ,
				amount: 1,
			},
			{
				id: 22 ,
				amount: 1,
			},
			{
				id: 23 ,
				amount: 1,
			},
			{
				id: 24 ,
				amount: 1,
			},
		],
		instructions: [
			"Hakk opp det hvite av purren, det grønne snittes fint og spares til senere.",
			"Fres det hvite fra purren en stund i smøret.",
			"Tilsett poteter, timian og laurbær.",
			"Hell over kaldt vann, kok opp og skum av, kok videre til alt er helt mørt, tar vanligvis mellom 30 og 40 minutter.",
			"Tilsett fløten og kok opp.",
			"Fjern krydderene og kjør alt glatt i en mikser.",
			"Lag en sellerisalat, hvis det er ønsker.",
			"Smak til med litt tabasco og litt salt.",
		],
	},
	{
		id: 3,
		name: "Spinatsuppe",
		ingredients: [
			{
				id: 0 ,
				amount: 1,
			},
			{
				id: 2 ,
				amount: 250,
			},
			{
				id: 3 ,
				amount: 50,
			},
			{
				id: 26 ,
				amount: 25,
			},
			{
				id: 27 ,
				amount: 500,
			},
			{
				id: 6 ,
				amount: 4,
			},
			{
				id: 28 ,
				amount: 4,
			},
			{
				id: 19 ,
				amount: 2,
			},
			{
				id: 29 ,
				amount: 1,
			},
			{
				id: 24 ,
				amount: 1,
			},
		],
		instructions: [
				 "Del muskattnøtten i 2, bruker kun halve.",
				 "Fres løk og hvitløk i smøret, ha i spinaten.",
				 "Når spinaten faller sammen, løfter du den ut.",
				 "Dryss melet i kjelen, spe med kraft og fløte.",
				 "Kok opp og la småkoke i 10 minutter.",
				 "Kjør spinaten til en fin puré sammen med litt av suppa.",
				 "Ha den tilbake i kjelen.",
				 "Kok opp og smak til.",
		],
	},
	{
		id: 4,
		name: "Barbecue spareribs",
		ingredients: [
			{
				id: 30 ,
				amount: 1000,
			},
			{
				id: 31 ,
				amount: 2,
			},
			{
				id: 32 ,
				amount: 6,
			},
			{
				id: 8 ,
				amount: 2,
			},
			{
				id: 33 ,
				amount: 2,
			},
			{
				id: 34 ,
				amount: 3,
			},
			{
				id: 35 ,
				amount: 1,
			},
			{
				id: 2 ,
				amount: 2,
			},
			{
				id: 37 ,
				amount: 1,
			},
			{
				id: 38 ,
				amount: 1,
			},
			{
				id: 24 ,
				amount: 1,
			},
		],
		instructions: [
			"Ribbebeina kokes i en time i bare vann til de er møre.",
			"Ta ut og avkjøl.",
			"Rør sammen resten av ingrediensene og legg de kokte beina i.",
			"La marinere natten over.",
			"Spre de marinerte beina på stekebrettet.",
			"Stek på 200 grader i ca 30 til 40 minutter.",
			"Bruk en pensel eller skje og pensle marinaden over flere ganger underveis til beina blir glasert.",
		],
	},
	{
		id: 5,
		name: "Pølselapskaus",
		ingredients: [
			{
				id: 39 ,
				amount: 2,
			},
			{
				id: 40 ,
				amount: 1,
			},
			{
				id: 41 ,
				amount: 1,
			},
			{
				id: 16 ,
				amount: 1,
			},
			{
				id: 17 ,
				amount: 4,
			},
			{
				id: 70 ,
				amount: 1,
			},
			{
				id: 42 ,
				amount: 300,
			},
		],
		instructions: [
			"Del opp kålroten i 4, vi skal bare bruke 1/4. Pølsen kan være for eksempel vossakorv eller kjøttpølse.",
			"Alle grønnsaker skrelles og kuttes i terninger.",
			"Ha gulrot og kålrot i en kjele og dekk med vann.",
			"Kok i 20 minutter, ha så poteter, purre, persillerot og buljong. Kok videre.",
			"Mot slutten, når alt er mørt, har du i pølsene.",
			"Smakes til med salt og pepper.",
			"Server med flatbrød og smør.",
		],
	},
	{
		id: 6,
		name: "Spaghetti Bolognese",
		ingredients: [
			{
				id: 43 ,
				amount: 400,
			},
			{
				id: 0 ,
				amount: 1,
			},
			{
				id: 2 ,
				amount: 2,
			},
			{
				id: 39 ,
				amount: 2,
			},
			{
				id: 44 ,
				amount: 2,
			},
			{
				id: 12 ,
				amount: 4,
			},
			{
				id: 45 ,
				amount: 400,
			},
			{
				id: 11 ,
				amount: 4,
			},
			{
				id: 10 ,
				amount: 1,
			},
			{
				id: 21 ,
				amount: 2,
			},
			{
				id: 4 ,
				amount: 1,
			},
			{
				id: 18 ,
				amount: 2,
			},
			{
				id: 50 ,
				amount: 100,
			},
			{
				id: 24 ,
				amount: 1,
			},
			{
				id: 52 ,
				amount: 1,
			},
		],
		instructions: [
			"Varm opp olje i en gryte og stek kjøttet brunt.",
			"Knus og del opp kjøttet med en tresleiv, eller liknende, så det deler seg i små biter.",
			"Tilsett løk og de andre grønnsakene og fres det blankt/gyllent.",
			"Tilsett tomatpuréen og la den frese litt med.",
			"Slå over tomat, hvitvin og kraft, kok opp.",
			"Ha i laurbærblad og kok inntil en hod tjukk konsistens, ca en halvtime. Kan fint gjøres lenger etter ønske.",
			"Smak til med salt, pepper og gjerne timian/basilikum.",
			"Spaghettien kokes som pakken sier. Serveres med kjøttsausen.",
			"Riv sjenerøst med parmesan over, litt olivenolje og godt med pepper.",
		],
	},
	{
		id: 7,
		name: "Spaghetti Carbonara",
		ingredients: [
			{
				id: 43 ,
				amount: 400,
			},
			{
				id: 58 ,
				amount: 2,
			},
			{
				id: 48 ,
				amount: 100,
			},
			{
				id: 2 ,
				amount: 2,
			},
			{
				id: 49 ,
				amount: 3,
			},
			{
				id: 19 ,
				amount: 1,
			},
			{
				id: 50 ,
				amount: 50,
			},
			{
				id: 12 ,
				amount: 3,
			},
			{
				id: 68 ,
				amount: 5,
			},
			{
				id: 24 ,
				amount: 1,
			},
			{
				id: 14 ,
				amount: 1,
			},
			{
				id: 71 ,
				amount: 1,
			},
		],
		instructions: [
			"Sett over vann til pasta med salt.",
			"Strimler med bacon stekes på middels temperatur i sitt eget fett til de er sprø og gylne.",
			"Helt på slutten av steketid tilsetter du et par knuste hvitløksfedd som skal smaksette fettet og kjøttet.",
			"Sett til side.",
			"Slå egg i en bolle, pisk inn fløten og bland i revet ost.",
			"Bland sammen og ha i oljen, masse pepper og eventuelt finhakkede urter, som timian og persille.",
			"Når pastaen er kokt, siler du den i et dørslag og har den i en stor, kald panne.",
			"Hell litt olje over.",
			"Vent et minutt, løft litt på pastaen innimellom.",
			"Hell over eggeblandingen og baconet, la det renne gjennom pastaen før du løfter og blander den inn.",
			"Server umiddelbart med ekstra svart pepper, parmesan og litt olje til dem som trenger det.",
		],
	},
	{
		id: 8,
		name: "Capresesalat",
		ingredients: [
			{
				id: 9 ,
				amount: 4,
			},
			{
				id: 53 ,
				amount: 2,
			},
			{
				id: 15 ,
				amount: 10,
			},
			{
				id: 24 ,
				amount: 1,
			},
			{
				id: 12 ,
				amount: 2,
			},
			{
				id: 55 ,
				amount: 2,
			},
		],
		instructions: [
			"Skjær mozzarella i skiver og anrett tomat og mozzarella i taksteinsmønster på et fat.",
			"Riv eller grovhakk basilikum og ha på.",
			"Dryss over salt og olivenolje.",
			"Ha eventuelt på noen dråper balsamico eller annen syre.",
		],
	},
	{
		id: 9,
		name: "Cæsarsalat",
		ingredients: [
			{
				id: 56 ,
				amount: 2,
			},
			{
				id: 49 ,
				amount: 2,
			},
			{
				id: 59 ,
				amount: 2,
			},
			{
				id: 57 ,
				amount: 1,
			},
			{
				id: 2 ,
				amount: 1,
			},
			{
				id: 33 ,
				amount: 1,
			},
			{
				id: 60 ,
				amount: 4,
			},
			{
				id: 50 ,
				amount: 100,
			},
			{
				id: 61 ,
				amount: 100,
			},
		],
		instructions: [
			"Fjern eventulle stygge blader på salaten, vask resten godt og tørk i en salatslynge eller på et håndle.",
			"Visp sammen eggeplommene, sitrosaften, worcestersaus og hvitløk.",
			"Ha i ansjosen og halvparten av parmesanen, og spe med olje i en tynn stråle under pisking.",
			"Det er smart om ingrediensene i majonesen har lik temperatur, ellers kan den skille seg.",
			"Smakes til med salt og pepper.",
			"Hvis dressingen blir for tjukk, kan du spe med litt vann.",
			"Brødet kuttes i terninger eller staver som stekes sprø i litt smør.",
			"Vend salaten i dressing, server i dype boller, legg krutongene over og dryss parmesan på toppen.",
		],
	},
	{
		id: 10,
		name: "Salat med feta, valnøtt og pærer",
		ingredients: [
			{
				id: 72 ,
				amount: 200,
			},
			{
				id: 63 ,
				amount: 1,
			},
			{
				id: 64 ,
				amount: 1,
			},
			{
				id: 65 ,
				amount: 1,
			},
			{
				id: 66 ,
				amount: 50,
			},
			{
				id: 67 ,
				amount: 200,
			},
			{
				id: 73 ,
				amount: 1,
			},
		],
		instructions: [
			"Epler og pærer skrelles og skjæres i tynne strimler.",
			"Anrett blandet salat med endive i skåler.",
			"Fordel eple og pære, legg over valnøtter og fetaost som er smuldret opp.",
			"Lag dressing og hell over.",
		],
	},
]);

// Create text search indices
db.ingredients.createIndex({ ngrams: "text" });
db.recipes.createIndex({ name: "text" });

/**
 * Generate ngrams of length `n` from `text`.
 * @param {string} text Text to generate ngrams from
 * @param {number} n Length of ngram
 * @returns String of ngrams
 */
function ngrams(text, n) {
	let ret = "";
	for (let i = 0; i < text.length - n + 1; i++) {
		ret += text.slice(i, i + n);
		ret += " ";
	}
	return ret;
}
