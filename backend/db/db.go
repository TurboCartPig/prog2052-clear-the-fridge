package db

import (
	"context"
	"encoding/json"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"clearthefridge/types"
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
	url := os.Getenv("MONGODB_URL")
	if url == "" {
		log.Print("MONGODB_URL not found, using default")
		return "mongodb://localhost:27017"
	}
	return url
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
		SetProjection(bson.D{{"_id", 0}, {"id", 1}, {"name", 1}, {"unit", 1}, {"img", 1}, {"score", bson.D{{"$meta", "textScore"}}}, {"amount", 1}}).
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
func SearchRecipes(searchObject types.SearchObject) string {
	collection := client.
		Database(database).
		Collection(recipes)

	dbFilter := bson.D{{"ingredients.id", bson.D{{"$in", searchObject.Ingredients}}}}

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

	var recipes []types.Recipe
	json.Unmarshal(data, &recipes)

	filteredRecipes := FilterRecipeSearch(searchObject, recipes)

	res, err := json.Marshal(filteredRecipes)

	if err != nil {
		log.Fatal(err)
	}

	return string(res)
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

// Further filters a recipe search based on the searchObject and a recipe array
// @param searchObject - The object containing information regarding the search
// @param recipes - The slice to be further filtered
func FilterRecipeSearch(searchObject types.SearchObject, recipes []types.Recipe) []types.Recipe {
	var filteredRecipes []types.Recipe
	var ingredientsInSearch []int

	var missingIngredients int
	for _, recipe := range recipes { // Loops through all recipes
		missingIngredients = 0

		// Limit filter
		for _, ingredient := range recipe.Ingredients {
			// Increments the counter if the ingredient does not exist in the searchObject
			if !contains(searchObject.Ingredients, ingredient.ID) {
				missingIngredients++
			} else {
				ingredientsInSearch = append(ingredientsInSearch, ingredient.ID)
			}
		}

		// Amount filter
		if searchObject.AmountFilter {
			for _, ingredient := range recipe.Ingredients {
				if contains(ingredientsInSearch, ingredient.ID) {
					for j, searchIngredient := range searchObject.Ingredients {
						if searchIngredient == ingredient.ID {
							if searchObject.IngredientAmounts[j] < ingredient.Amount {
								missingIngredients++
							}
						}
					}
				}
			}
		}

		if missingIngredients <= searchObject.LimitFilter {
			filteredRecipes = append(filteredRecipes, recipe)
		}
	}

	return filteredRecipes
}

// Checks if an ingredientID exists in an slice of ingredientIDs
// @param ingredientIDs - The slice to search in
// @param ingredientID - The id to search for
// @return Wheter or not the id exists in the slice
func contains(ingredientIDs []int, ingredientID int) bool {
	for _, id := range ingredientIDs {
		if id == ingredientID {
			return true
		}
	}
	return false
}

// Inserts a recipe to the a slice of recipes if, and only if it is unique (does not exists already)
// @param recipe - The recipe to maybe insert
// @param recipes - The slice to maybe insert into
func insertIfUnique(recipe types.Recipe, recipes []types.Recipe) {
	exists := false
	for _, r := range recipes {
		if r.ID == recipe.ID {
			exists = true
		}
	}
	if !exists {
		recipes = append(recipes, recipe)
	}
}
