package api

import (
	"log"
	"net/http"
	"strconv"
	"strings"
)

// Middleware for setting content-type to json.
func ReturnJSON(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		rw.Header().Add("Content-Type", "application/json")
		next.ServeHTTP(rw, r)
	})
}

// Helper function for returning a given message and status code.
func ReturnMessage(msg string, code int) http.HandlerFunc {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		http.Error(rw, msg, code)
	})
}

// Parses a comma separated list of id's in string format to a slice of ints 
// @param query - The string to be parsed 
// @return the new int slice with the ids 
func ParseIDsQuery(query string) []int {
	ids := strings.Split(query, ",")
	var ingredientIDs = []int{}
	for _, id := range ids {
		i, err := strconv.Atoi(id)
		if err != nil {
			log.Fatal(err)
		}
		ingredientIDs = append(ingredientIDs, i)
	}
	return ingredientIDs
}
