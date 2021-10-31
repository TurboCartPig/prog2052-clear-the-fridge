package api

import (
	"clearthefridge/db"
	"fmt"
	"log"
	"net/http"
)

// Creates a new HTTP Handler that returns a selection of ingredients the user might be interested in adding to their search.
func NewIngredientsHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusNotImplemented)
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

		// TODO: Validate query is a valid search term

		data := db.SearchIngredients(query)
		fmt.Fprint(res, data)
	}
}