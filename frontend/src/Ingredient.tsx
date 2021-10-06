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
  // state: IngredientState = {
  //   amount: 1,
  //   isOpen: false,
  // }

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
        {this.amount()}
        </div>
        </button>
        {this.state.isOpen && <div className="bg-red-100 w-2/5 h-12 rounded-lg text-xs"></div>}
      </div>);
  }

  amount() {
    return (this.state.amount + " " + this.props.unit)
  }


}

export default Ingredient
