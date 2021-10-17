package api

import "net/http"

// Creates a new HTTP Handler that returns a selection of ingredients the user might be interested in adding to their search.
func NewIngredientsHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusNotImplemented)
	}
}

// Creates a new HTTP Handler that searches ingredients based on a query and returns the result.
func NewIngredientsSearchHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(http.StatusNotImplemented)
	}
}