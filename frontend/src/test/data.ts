import Carrot from "../res/carrot.svg";
import Milk from "../res/milk.svg";
import Beef from "../res/beef.svg";
import Image from "../res/img_01.png";
import { Unit } from "../types";

/**
 * Test module for recipe and ingredient objects
 */

/**
 * Recipes
 */
export const RecipeData = [
	{
		name: "Recipe name 1",
		imgPath: Image,
		ingredients: ["Ingredient 1", "Ingredient 2"],
		instructions: ["Instruction 1", "Instruction 2"],
	},
	{
		name: "Recipe name 2",
		imgPath: Image,
		ingredients: ["Ingredient 1", "Ingredient 2"],
		instructions: ["Instruction 1", "Instruction 2"],
	},
	{
		name: "Recipe name 3",
		imgPath: Image,
		ingredients: ["Ingredient 1", "Ingredient 2"],
		instructions: ["Instruction 1", "Instruction 2"],
	},
	{
		name: "Recipe name 4",
		imgPath: Image,
		ingredients: ["Ingredient 1", "Ingredient 2"],
		instructions: ["Instruction 1", "Instruction 2", "Instruction 3", "Instruction 4", "Instruction 5", "Instruction 6", "Instruction 7", "Instruction 8"],
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
