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
	pcs,
	g,
	l, // Liter
	dl, // Deciliter
	ml, // Milliliter
}

export function printUnit(unit: Unit, amount: number) {
	switch (unit) {
		case Unit.pcs:
			return amount + " pcs";
		case Unit.g:
			return amount * 100 + " g";
		case Unit.l:
			return amount * 100 + " l";
		case Unit.dl:
			return amount * 100 + " dl";
		case Unit.ml:
			return amount * 100 + " ml";
	}
}
