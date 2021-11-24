package main

import (
	"clearthefridge/api"
	"clearthefridge/db"
	"log"
	"net/http"
	"os"
)

func port() string {
	if port := os.Getenv("PORT"); port != "" {
		return port
	}
	return "3080"
}

func main() {
	log.Print("Starting")

	db.ConnectDatabase()

	// FIXME: ListenAndServe() never returns, database does not disconnect
	r := api.NewRouter()
	log.Fatal(http.ListenAndServe(":" + port(), r))

	db.DisconnectDatabase()
}
