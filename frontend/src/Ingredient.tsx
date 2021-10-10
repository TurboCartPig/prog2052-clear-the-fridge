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
      <div className="grid justify-items-center mt-3">
        <button className="grid grid-cols-10 justify-items-center items-center
                           bg-red-200 w-2/5 h-12 rounded-lg text-xs"
      onClick={() => {this.setState({isOpen: !this.state.isOpen})}}>

        <div className="col-span-1">
            {this.props.name}
        </div>
        
        {!this.state.isOpen && <div className="col-start-9 col-span-1">{this.currentAmount()}</div>}
      
        <img className="col-start-10 col-span-1" src={require(this.state.isOpen ?
          '../src/res/horizontal_rule.svg' :
          '../src/res/edit.svg')}></img>
        
        </button>
        {this.state.isOpen && this.modifyIngredient()}
      </div>);
  }

  currentAmount() {
    return (this.state.amount + " " + this.props.unit)
  }

  modifyIngredient() {
    return (
      <div className="grid grid-cols-10 bg-red-200 w-2/5 h-12 rounded-b-lg text-xs">
        <button className="bg-gray-300 col-span-4 m-2"
      onClick={() => {this.setState({amount: this.state.amount - 1 })}}>-</button>
           <button className="bg-gray-100 col-span-2 my-2 place-self-stretch cursor-default">
               {this.currentAmount()}
           </button>
        <button className ="bg-gray-300 col-span-4 m-2"
                onClick={() => {this.setState({amount: this.state.amount + 1 })}}>+</button>
      </div>
    )
  }
}

export default Ingredient
