package api

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type diag struct {
	Version          string `json:"version"`
	Uptime           int    `json:"uptime"`
}

func NewDiagHandler() http.HandlerFunc {
	startTime := time.Now()

	return func(res http.ResponseWriter, req *http.Request) {
		uptime := int(time.Since(startTime).Seconds())

		// Encode to json
		err := json.NewEncoder(res).Encode(diag {
			Version: "v1",
			Uptime: uptime,
		})

		// log and return error if we fail to encode
		if err != nil {
			log.Println("Failed to encode diag information into json")
			res.WriteHeader(http.StatusInternalServerError)
			return
		}

		res.WriteHeader(http.StatusOK)
	}
}