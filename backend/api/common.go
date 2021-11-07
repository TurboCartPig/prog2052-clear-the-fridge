package api

import (
	"net/http"

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

// Construct a new router for the API.
func NewRouter() *chi.Mux {
	// Setup new chi router
	r := chi.NewRouter()

	// Setup middleware
	r.Use(middleware.Logger)
	r.Use(ReturnJSON)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://clearthefridge.com", "https://clearthefridge.com","http://localhost:4080", "https://localhost:4080"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type"},
		AllowCredentials: false,
	}))

	// Setup routes
	r.Route("/api/v1", func(r chi.Router) {
		r.Get("/diag", NewDiagHandler())
		r.Get("/ingredients", NewIngredientsHandler())
		r.Get("/ingredients/search", NewIngredientsSearchHandler())
		r.Get("/recipes", NewRecipesHandler())
		r.Get("/recipes/search", NewRecipesSearchHandler())
	})

	return r
}