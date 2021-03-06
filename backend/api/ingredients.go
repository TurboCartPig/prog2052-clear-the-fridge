package api

import (
	"clearthefridge/db"
	"fmt"
	"log"
	"net/http"
	"strings"
	"unicode"
)

const RecommendedIngredients = "tomat løk gulrot"

// Creates a new HTTP Handler that returns a selection of ingredients the user might be interested in adding to their search.
func NewIngredientsHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		data := db.SearchIngredients(RecommendedIngredients)
		fmt.Fprint(res, data)
	}
}

// Creates a new HTTP Handler that searches ingredients based on a query and returns the result.
func NewIngredientsSearchHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		query := req.URL.Query().Get("query")

		// Reject requests without query
		if query == "" {
			log.Println("Received request without query; rejecting")
			http.Error(res, "Incorrect request schema", http.StatusBadRequest)
		}

		query = sanitizeSearchTerm(query)

		data := db.SearchIngredients(query)
		fmt.Fprint(res, data)
	}
}

// Creates a new HTTP handler that fetches id's based on a list of ids 
func NewIngredientSearchByIDs() http.HandlerFunc {
	return func (res http.ResponseWriter, req *http.Request) {
		ingredientIDs := req.URL.Query().Get("values")

		if ingredientIDs == "" {
			log.Println("Ingredient search with no provided id's")
			http.Error(res, "Incorrect query parameters", http.StatusBadRequest)
		}

		ids, err := ParseNumbersQuery(ingredientIDs)
		if err != nil {
			http.Error(res, err.Error(), http.StatusBadRequest)
		}
		data := db.SearchIngredientsByIDs(ids)
		fmt.Fprint(res, data)
	}
}

// Sanitize the search term and return a string that is safe to pass to mongo.
// Here we simply trim any illegal symbols.
func sanitizeSearchTerm(term string) string {
	var res strings.Builder

	// Only return runes that are unicode letters
	for _, sym := range term {
		if unicode.IsLetter(sym) {
			res.WriteRune(unicode.ToLower(sym))
		}
	}

	return res.String()
}
