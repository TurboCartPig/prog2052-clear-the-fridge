/**
 * This module defines various types used in multiple components.
 */

/**
 * All the data about one ingredient that we received from the backend.
 * NOTE: Directly JSON deserialized from backend.
 */
export type IngredientData = {
	id: number;
	// Name of the ingredient
	name: string;
	// Unit of measurement
	unit: string;
	// Path to the preview image on the server
	img: string;
	// The amount of this ingredient
	amount: number;
};

export interface RecipeData {
	id: number
	ingredients: IngredientWithAmount[]
	instructions: string[]
	name: string
	img: string
}

export type IngredientWithAmount = {
	ingredient: IngredientData;
	amount: number;
}

export interface TempRecipeData {
  _id: string
  id: number
  ingredients: IngredientInRecipe[]
  instructions: string[]
  name: string
  img: string
}

export interface IngredientInRecipe {
  amount: number
  id: number
}

/**
 * Unit of measurement for ingredients
 */
export enum Unit {
	stk, // Stykk
	gram,
	ss, // Spiseskje
	ts, // Teskje
	l, // Liter
	dl, // Deciliter
	ml, // Milliliter
}

export function printUnit(unit: Unit, amount: number) {
	switch (unit) {
		case Unit.stk:
			return amount + " stk";
		case Unit.gram:
			return amount + " g";
		case Unit.ss:
			return amount + " ss";
		case Unit.ts:
			return amount + " ts";
		case Unit.l:
			return amount + " l";
		case Unit.dl:
			return amount + " dl";
		case Unit.ml:
			return amount + " ml";
	}
}

export function calculateUnit(num: number, unit: string) : number {
	switch (unit) {
		case "stk":
			return num;
		case "gram":
			return num * 100;
		case "ss":
			return num;
		case "ts":
			return num;
		case "dl":
			return num;
		default:
			return num;
	}
}
