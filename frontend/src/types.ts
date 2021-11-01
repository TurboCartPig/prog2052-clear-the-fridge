/**
 * This module defines various types used in multiple components.
 */

/**
 * All the data about one ingredient that we received from the backend.
 * NOTE: Directly JSON deserialized from backend.
 */
export type IngredientData = {
	// Name of the ingredient
	name: string;
	// Unit of measurement
	unit: string;
	// Path to the preview image on the server
	img: string;
};

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
