import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import server from "../jest/server";
import Search from "./Search";

// Setup server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Displays recommendations", async () => {
	const onAdd = jest.fn();
	render(<Search onAdd={onAdd} />);

	// Check to see if the search box can be found by label
	const searchbox = screen.getByRole("searchbox");

	// Check to see if the search results are hidden by default
	let results = screen.queryByText("Results:");
	expect(results).toBeNull();

	// Check to see if the search results are show when the search bar is clicked
	userEvent.click(searchbox);
	results = screen.getByText("Results:");

	// Check to see if the default recommendations are displayed after the search bar has been clicked
	await screen.findByText("Gulrot");

	// Check to see if the search finds the right result
	userEvent.type(searchbox, "Tomat");
	await screen.findByText("Tomat");

	// Check to see if the ingredient is added when it is clicked
	const add = screen.getByRole("button", { name: "Add ingredient" });
	userEvent.click(add);
	expect(onAdd).toHaveBeenCalledTimes(1);
});
