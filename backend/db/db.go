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

const (
	database    = "clearthefridge"
	ingredients = "ingredients"
	recipes     = "recipes"
)

var (
	client *mongo.Client
)

// Get the MongoDB URI from environment with fallback
func getMongoURI() string {
	scheme := "mongodb://"
	uri := os.Getenv("MONGODB_URI")
	if uri == "" {
		log.Print("MONGODB_URI not found, using default")
		return scheme + "localhost:27017"
	}
	return scheme + uri
}

// Setup a connection to the database. Call `DisconnectDatabase` before shutdown.
func ConnectDatabase() {
	uri := getMongoURI()

	var err error
	client, err = mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		log.Fatal("Failed to connect to mongodb")
	}
}

// Disconnect from the database, assumes `ConnectDatabase` was called first.
func DisconnectDatabase() {
	if err := client.Disconnect(context.TODO()); err != nil {
		log.Fatal("Failed to disconnect from mongodb")
	}
}

// Search ingredients based on search term and return results as json string
// @param term - The term that is going to be used in the search 
// @return the results of the search 
func SearchIngredients(term string) string {
	collection := client.
		Database(database).
		Collection(ingredients)

	ngrams := MakeNgrams(term, 2)

	opts := options.Find().
		SetProjection(bson.D{{"_id", 0}, {"id", 1}, {"name", 1}, {"unit", 1}, {"img",1}, {"score", bson.D{{"$meta", "textScore"}}}}).
		SetSort(bson.D{{"score", bson.D{{"$meta", "textScore"}}}})

	cursor, err := collection.Find(context.TODO(), bson.D{{"$text", bson.D{{"$search", ngrams}}}}, opts)
	if err == mongo.ErrNoDocuments {
		return "[]"
	} else if err != nil {
		log.Fatal("Error while querying database ", err)
	}

	var results []bson.M
	err = cursor.All(context.TODO(), &results)
	if err != nil {
		log.Fatal("Error while parsing database response", err)
	}

	// Return empty json array if no documents, instead of null
	if len(results) == 0 {
		return "[]"
	}

	// Convert result into json
	data, err := json.MarshalIndent(results, "", "  ")
	if err != nil {
		log.Fatal("Failed to marshal bson to json")
	}

	return string(data)
}

// Queries the database for recipes that matches the slice of ingredientIDs
// @param ingredientIDs - The slice of ingredientIDs to be searched for 
// @return All recipes that contains all the ingredientIDs provided
func SearchRecipes(ingredientIDs []int) string {
	collection := client.
		Database(database).
		Collection(recipes)

	dbFilter := bson.D{{"ingredients.id", bson.D{{"$in", ingredientIDs}}}}

	cursor, err := collection.Find(context.TODO(), dbFilter)

	if err != nil {
		log.Fatal("Db error")
	}

	var results []bson.M
	err = cursor.All(context.TODO(), &results)

	if err != nil {
		log.Fatal("Error while parsing database response", err)
	}

	// Convert result into json
	data, err := json.MarshalIndent(results, "", "  ")
	if err != nil {
		log.Fatal("Failed to marshal bson to json")
	}

	return string(data)
}

// Fetches all ingredients that matches the provided id
// @param ingredientIDs - Array of the id's to fetch
// @return The ingredients in json format
func SearchIngredientsByIDs(ingredientIDs []int) string {
	collection := client.
		Database(database).
		Collection(ingredients)

	dbFilter := bson.D{{"id", bson.D{{"$in", ingredientIDs}}}}

	cursor, err := collection.Find(context.TODO(), dbFilter)

	if err != nil {
		log.Fatal("Db error")
	}

	var results []bson.M
	err = cursor.All(context.TODO(), &results)

	if err != nil {
		log.Fatal("Error while parsing database response", err)
	}

	// Convert result into json
	data, err := json.MarshalIndent(results, "", "  ")
	if err != nil {
		log.Fatal("Failed to marshal bson to json")
	}

	return string(data)
}
