package main

import (
	"clearthefridge/api"
	"clearthefridge/db"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

// Serve the REST API over HTTP
func serve() {
	// Setup new chi router
	r := chi.NewRouter()

	// Setup middleware
	r.Use(middleware.Logger)
	r.Use(api.ReturnJSON)
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"http://clearthefridge.com", "https://clearthefridge.com","http://localhost:4080", "https://localhost:4080"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Content-Type"},
		AllowCredentials: false,
	}))

	// Setup routes
	r.Route("/api/v1", func(r chi.Router) {
		r.Get("/diag", api.NewDiagHandler())
		r.Get("/ingredients", api.NewIngredientsHandler())
		r.Get("/ingredients/search", api.NewIngredientsSearchHandler())
		r.Get("/recipes", api.NewRecipesHandler())
		r.Get("/recipes/search", api.NewRecipesSearchHandler())
	})

	log.Fatal(http.ListenAndServe(":3080", r))
}

func main() {
	log.Print("Starting")

	db.ConnectDatabase()

	// FIXME: serve() never returns, database does not disconnect
	serve()

	db.DisconnectDatabase()
}
