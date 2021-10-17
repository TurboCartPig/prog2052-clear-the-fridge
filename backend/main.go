package main

import (
	"clearthefridge/api"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

// Serve the REST API over HTTP
func serve() {
	// Setup new chi router
	r := chi.NewRouter()

	// Setup middleware
	r.Use(middleware.Logger)
	r.Use(api.ReturnJSON)

	// Setup routes
	r.Route("/api/v1", func(r chi.Router) {
		r.Get("/diag", api.NewDiagHandler())
		r.Get("/ingredients", api.NewIngredientsHandler())
		r.Get("/ingredients/search", api.NewIngredientsSearchHandler())
		r.Get("/recipes", api.NewRecipesHandler())
		r.Get("/recipes/search", api.NewRecipesSearchHandler())
	})

	log.Fatal(http.ListenAndServe(":80", r))
}

func main() {
	log.Print("Starting")

	serve()
}
