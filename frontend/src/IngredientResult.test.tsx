import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IngredientResult from "./IngredientResult";
import { IngredientData } from "./types";

const mockData: IngredientData = {
	id: 0,
	name: "Gulrot",
	unit: "pcs",
	img: "carrot.svg",
};

describe("the ingredient-result component", () => {
	test("displays a result", () => {
		render(<IngredientResult data={mockData} onAdd={() => {}} />);

		// Find the `Gulrot` ingredient name, proving it was rendered from data
		screen.getByText("Gulrot");
	});

	test("can add ingredient", () => {
		const onAdd = jest.fn();

		render(<IngredientResult data={mockData} onAdd={onAdd} />);

		const add = screen.getByRole("button");
		userEvent.click(add);

		expect(onAdd).toHaveBeenCalledTimes(1);
		expect(onAdd).toHaveBeenCalledWith(mockData);
	});
});
