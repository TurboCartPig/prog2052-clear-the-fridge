package api

import (
	"clearthefridge/db"
	"clearthefridge/types"
	"fmt"
	"log"
	"net/http"
)


// Creates a new HTTP Handler that searches recipes based on a list of ingredients.
func NewRecipesSearchHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		ingredients := req.URL.Query().Get("ingredients")
		amounts := req.URL.Query().Get("amounts")
		limitFilter := req.URL.Query().Get("limitFilter")
		amountFilter := req.URL.Query().Get("amountFilter")

		// Reject requests without query
		if ingredients == "" {
			log.Println("Received request without query; rejecting")
			http.Error(res, "Incorrect request schema", http.StatusBadRequest)
			return
		}

		search, err := ProcessSearch(ingredients, amounts, limitFilter, amountFilter)
		if err != nil {
			http.Error(res, err.Error(), http.StatusBadRequest)
			return
		}
		recipes := db.SearchRecipes(search)
		fmt.Fprint(res, recipes)
	}
}

// Process a search
// @param ingredients - The string to be parsed to ingredients
// @param amounts - The string to be parsed to amounts
// @param limitFilter - The string to be parsed to limitFilter
// @param limitFilter - The string to be parsed to amountFilter
// @return SearchObject - The parsed searchObject
// @return error - If any, the error
func ProcessSearch(ingredients string, amounts string, limitFilter string, amountFilter string) (types.SearchObject, error) {
	var searchObject types.SearchObject
	var err error
	searchObject.Ingredients, err = ParseNumbersQuery(ingredients)
	if err != nil {
		return types.SearchObject{}, err
	}
	searchObject.IngredientAmounts, err = ParseNumbersQuery(amounts)
	if err != nil {
		return types.SearchObject{}, err
	}
	searchObject.LimitFilter, err = ParseNumberQuery(limitFilter)
	if err != nil {
		return types.SearchObject{}, err
	}
	searchObject.AmountFilter, err = ParseBooleanQuery(amountFilter)
	if err != nil {
		return types.SearchObject{}, err
	}
	return searchObject, nil
}
