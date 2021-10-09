import React from "react";
import "./tailwind.css";

type IngredientProps = {
  name: string,
  unit: string,
};

type IngredientState = {
  amount: number,
  isOpen: boolean,
};


class Ingredient extends React.Component<IngredientProps,IngredientState> {

  constructor(props: IngredientProps) {
    super(props)
    this.state = {
      amount: 1,
      isOpen: false,
    }
  }
  
  render () {
    return (
      <div className="grid justify-items-center">
        <button className="bg-red-200 w-2/5 h-12 rounded-lg text-xs"
      onClick={() => {this.setState({isOpen: !this.state.isOpen})}}>
        <div className="float-left ml-8">
        {this.props.name}
        </div>
        <div className="float-right mr-8">
        {this.currentAmount()}
        </div>
        </button>
        {this.state.isOpen && this.modifyIngredient()}
      </div>);
  }

  currentAmount() {
    return (this.state.amount + " " + this.props.unit)
  }

  modifyIngredient() {
    return (
      <div className="bg-red-100 w-2/5 h-12 rounded-lg text-xs">
        <button className="bg-gray-200 w-2/5 h-full float-left"
                onClick={() => {this.setState({amount: this.state.amount - 1 })}}>-</button>
        <button className ="bg-gray-200 w-2/5 h-full float-right"
                onClick={() => {this.setState({amount: this.state.amount + 1 })}}>+</button>
        <div className="w-full h-full bg-blue-200">{this.currentAmount()}</div>
      </div>
    )
  }
  

}

export default Ingredient
