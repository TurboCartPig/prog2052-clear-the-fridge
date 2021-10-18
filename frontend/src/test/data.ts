import Carrot from "../res/carrot.svg";
import Milk from "../res/milk.svg";
import Beef from "../res/beef.svg";
import { Unit } from "../Ingredient";

/**
 * Test module for recipe and ingredient objects
 */

/**
 * Recipes
 */
export const RecipeData = [
	{
		name: "Oppskrift 1",
		imgPath: "./img/img_01.png",
		ingredients: ["Ingrediens 1", "Ingrediens 2"],
		instructions: ["Instruksjon 1", "Instruksjon 2"],
	},
	{
		name: "Oppskrift 2",
		imgPath: "./img/img_01.png",
		ingredients: ["Ingrediens 1", "Ingrediens 2"],
		instructions: ["Instruksjon 1", "Instruksjon 2"],
	},
	{
		name: "Oppskrift 3",
		imgPath: "./img/img_01.png",
		ingredients: ["Ingrediens 1", "Ingrediens 2"],
		instructions: ["Instruksjon 1", "Instruksjon 2"],
	},
	{
		name: "Oppskrift 4",
		imgPath: "./img/img_01.png",
		ingredients: ["Ingrediens 1", "Ingrediens 2"],
		instructions: ["Instruksjon 1", "Instruksjon 2"],
	},
];

/**
 * Ingredients
 */

export const IngredientData = [
	{
		name: "Carrot",
		unit: Unit.pcs,
		imgPath: Carrot,
	},
	{
		name: "Milk",
		unit: Unit.ml,
		imgPath: Milk,
	},
	{
		name: "Beef",
		unit: Unit.g,
		imgPath: Beef,
	},
];
