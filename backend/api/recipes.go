package api

import "net/http"

// Creates a new HTTP Handler that returns a selection of recipes the user might be interested in.
func NewRecipesHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusNotImplemented)
	}
}

// Creates a new HTTP Handler that searches recipes based on a list of ingredients.
func NewRecipesSearchHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusNotImplemented)
	}
}