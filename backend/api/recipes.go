package api

import (
	"clearthefridge/db"
	"fmt"
	"log"
	"net/http"
)

// Creates a new HTTP Handler that returns a selection of recipes the user might be interested in.
func NewRecipesHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusOK)
		res.Write([]byte("hello"))

	}
}

// Creates a new HTTP Handler that searches recipes based on a list of ingredients.
func NewRecipesSearchHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		ingredients := req.URL.Query().Get("ingredients")
		amounts := req.URL.Query().Get("amounts")
		limitFilter := req.URL.Query().Get("limitFilter")
		amountFilter := req.URL.Query().Get("amountFilter")

		fmt.Println(amounts, limitFilter, amountFilter)

		// Reject requests without query
		if ingredients == "" {
			log.Println("Received request without query; rejecting")
			http.Error(res, "Incorrect request schema", http.StatusBadRequest)
		}

		search := ProcessSearch(ingredients, amounts, limitFilter, amountFilter)
		recipes := db.SearchRecipes(search.Ingredients)
		fmt.Print(recipes)
		fmt.Fprint(res, recipes)
	}
}

// Process a search 
func ProcessSearch(ingredints string, amounts string, limitFilter string, amountFilter string) SearchObject {
	var searchObject SearchObject
	searchObject.Ingredients = ParseNumbersQuery(ingredints)
	searchObject.IngredientAmounts = ParseNumbersQuery(amounts)
	searchObject.LimitFilter = ParseNumberQuery(limitFilter)
	return searchObject
}


