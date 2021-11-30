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
		res.WriteHeader(http.StatusOK);
		res.Write([]byte("hello"));

	}
}

// Creates a new HTTP Handler that searches recipes based on a list of ingredients.
func NewRecipesSearchHandler() http.HandlerFunc {
	return func(res http.ResponseWriter, req *http.Request) {
		ingredients := req.URL.Query().Get("ingredients");

		// Reject requests without query
		if ingredients == "" {
			log.Println("Received request without query; rejecting")
			http.Error(res, "Incorrect request schema", http.StatusBadRequest)
		}

		ids := ParseIDsQuery(ingredients)
		recipes := db.SearchRecipes(ids)
		fmt.Print(recipes)
        fmt.Fprint(res, recipes)
	}
}


// Process a filter
func ProcessFilter() {
	
}
