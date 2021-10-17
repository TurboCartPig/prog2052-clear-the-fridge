package db

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Get the MongoDB URI from environment
func getMongoURI() string {
	scheme := "mongodb://"
	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		log.Print("MONGODB_URI not found, using default")
		return scheme + "localhost:27017"
	}
	return scheme + uri
}

func SetupMongo() {
	uri := getMongoURI()

	// Connect to mongodb
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatal("Failed to connect to mongodb")
	}

	// Disconnect on shutdown
	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			log.Fatal("Failed to disconnect from mongodb")
		}
	}()

	coll := client.Database("clearthefridge").Collection("ingredients")

	// Find "Gulrot" document
	var result bson.M
	err = coll.FindOne(context.TODO(), bson.D{{"name", "Gulrot"}}).Decode(&result)
	if err != nil {
		log.Fatal("What?")
	}

	// Convert result into json
	data, err := json.MarshalIndent(result, "", "  ")
	if err != nil {
		log.Fatal("Failed to marshal bson to json")
	}

	log.Println(data)
}