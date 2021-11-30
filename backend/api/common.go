package api

import (
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
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

// Construct a new router for the API.
func NewRouter() *chi.Mux {
	// Setup new chi router
	r := chi.NewRouter()

	// Setup middleware
	r.Use(middleware.Logger)
	r.Use(ReturnJSON)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://clearthefridge.com", "https://clearthefridge.com", "https://clearthefridge-frontend.herokuapp.com", "http://localhost:4080", "https://localhost:4080"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type"},
		AllowCredentials: false,
	}))

	// Setup routes
	r.Route("/api/v1", func(r chi.Router) {
		r.Get("/diag", NewDiagHandler())
		r.Get("/ingredients", NewIngredientsHandler())
		r.Get("/ingredients/search", NewIngredientsSearchHandler())
		r.Get("/ingredients/search/id", NewIngredientSearchByIDs())
		r.Get("/recipes", NewRecipesHandler())
		r.Get("/recipes/search", NewRecipesSearchHandler())
	})

	return r
}
