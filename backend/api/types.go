package api

type Recipe struct {
	MongoID      string        `json:"_id"`
	ID           int           `json:"id"`
	Ingredients  []Ingredients `json:"ingredients"`
	Instructions []string      `json:"instructions"`
	Name         string        `json:"name"`
}
type Ingredients struct {
	Amount int `json:"amount"`
	ID     int `json:"id"`
}

type SearchObject struct {
	Ingredients       []int
	IngredientAmounts []int
	LimitFilter       int
	AmountFilter      bool
}
