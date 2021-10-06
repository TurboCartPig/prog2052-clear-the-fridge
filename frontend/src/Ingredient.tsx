import React from "react";
import "./tailwind.css";

type IngredientProps = {
  name: string,
  unit: string;
};

type IngredientState = {
  amount: number;
};


class Ingredient extends React.Component<IngredientProps,IngredientState> {
  state: IngredientState = {
    amount: 1,
  };
  
  render () {
    return <h1>{this.props.name} {this.state.amount} {this.props.unit}</h1>;
  }
}

export default Ingredient
