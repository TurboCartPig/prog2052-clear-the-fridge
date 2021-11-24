import { setupServer } from "msw/node";
import { rest } from "msw";

export default setupServer(
	rest.get("http://localhost:3080/api/v1/ingredients", (req, res, ctx) => {
		return res(
			ctx.json([
				{ id: 0, name: "Gulrot", unit: "pcs", img: "carrot.svg" },
			])
		);
	}),
	rest.get(
		"http://localhost:3080/api/v1/ingredients/search",
		(req, res, ctx) => {
			return res(
				ctx.json([
					{ id: 1, name: "Tomat", unit: "pcs", img: "tomato.svg" },
				])
			);
		}
	)
);
