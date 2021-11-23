import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IngredientResult from "./IngredientResult";
import { IngredientData } from "./types";

const mockData: IngredientData = {
	id: 0,
	name: "Gulrot",
	unit: "pcs",
	img: "carrot.svg",
};

test("Displays result", () => {
	function mockOnAdd(ingredient: IngredientData) {
		expect(ingredient).toBe(mockData);
	}

	render(<IngredientResult data={mockData} onAdd={mockOnAdd} />);

	// Find the `Gulrot` ingredient name, proving it was rendered from data
	const component = screen.getByText(/Gulrot/);
	expect(component).toBeTruthy();

	// TODO: When accessibility is merged, add onAdd test here.
});
