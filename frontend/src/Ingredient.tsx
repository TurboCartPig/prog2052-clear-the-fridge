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
    return (
      <div className="grid justify-items-center">
        <button className="bg-red-200 w-2/5 h-12 rounded-lg text-xs">
        <div className="float-left ml-8">
        {this.props.name}
        </div>
        <div className="float-right mr-8">
        {this.amount()}
        </div>
        </button>
      </div>);
  }

  amount() {
    return (this.state.amount + this.props.unit)
  }
}

export default Ingredient
