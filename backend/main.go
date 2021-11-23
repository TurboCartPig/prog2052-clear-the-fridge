package main

import (
	"clearthefridge/api"
	"clearthefridge/db"
	"log"
	"net/http"
)

func main() {
	log.Print("Starting")

	db.ConnectDatabase()

	// FIXME: ListenAndServe() never returns, database does not disconnect
	r := api.NewRouter()
	log.Fatal(http.ListenAndServe(":3080", r))

	db.DisconnectDatabase()
}
