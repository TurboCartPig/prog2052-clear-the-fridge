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

describe("the search component", () => {
	test("has a searchbox", () => {
		// Setup component
		const onAdd = jest.fn();
		render(<Search onAdd={onAdd} />);

		// Check to see if the search box can be found by label
		screen.getByRole("searchbox");
	});

	test("is closed by default", () => {
		// Setup component
		const onAdd = jest.fn();
		render(<Search onAdd={onAdd} />);

		// Check to see if the search results are hidden by default
		const results = screen.queryByText("Results:");
		expect(results).toBeNull();
	});

	test("opens when clicked", () => {
		// Setup component
		const onAdd = jest.fn();
		render(<Search onAdd={onAdd} />);

		// Check to see if the search results are show when the search bar is clicked
		const searchbox = screen.getByRole("searchbox");
		userEvent.click(searchbox);
		screen.getByText("Results:");
	});

	test("has default recemmendation", async () => {
		// Setup component
		const onAdd = jest.fn();
		render(<Search onAdd={onAdd} />);

		// Click the searchbox
		const searchbox = screen.getByRole("searchbox");
		userEvent.click(searchbox);

		// Check that the default recommendation is visible
		await screen.findByText("Gulrot");
	});

	test("can search for ingredients", async () => {
		// Setup component
		const onAdd = jest.fn();
		render(<Search onAdd={onAdd} />);

		const searchbox = screen.getByRole("searchbox");
		userEvent.type(searchbox, "Tomat");

		// Check to see if the search finds the right result
		await screen.findByText("Tomat");
	});

	test("can add ingredients", async () => {
		// Setup component
		const onAdd = jest.fn();
		render(<Search onAdd={onAdd} />);

		const searchbox = screen.getByRole("searchbox");
		userEvent.type(searchbox, "Tomat");

		const add = await screen.findByRole("button", {
			name: "Add ingredient",
		});
		userEvent.click(add);

		// Check to see if the ingredient is added when it is clicked
		expect(onAdd).toHaveBeenCalledTimes(1);
	});
});
