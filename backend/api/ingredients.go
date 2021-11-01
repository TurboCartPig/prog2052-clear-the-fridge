package api

import (
	"clearthefridge/db"
	"fmt"
	"log"
	"net/http"
	"strings"
	"unicode"
)

const RecommendedIngredients = "Tomat Løk Gulrot -\"boks tomat\""

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

// Sanitize the search term and return a string that is safe to pass to mongo.
// Here we simply trim any illegal symbols.
func sanitizeSearchTerm(term string) string {
	var res strings.Builder

	// Only return runes that are unicode letters
	for _, sym := range term {
		if unicode.IsLetter(sym) {
			res.WriteRune(sym)
		}
	}

	return res.String()
}