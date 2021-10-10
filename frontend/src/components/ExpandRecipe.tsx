import React from "react";
import "../tailwind.css";

type RecipeProps = {
    name: string,
}

type RecipeState = {
    isOpen: boolean,
};

class ExpandRecipe extends React.Component<RecipeProps, RecipeState> {

    constructor(props: RecipeProps) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    render() {
        return (
        <div className="grid m-5">
            <button className="bg-gray-200 w-full h-64 rounded-lg" 
                    onClick={() => {this.setState({isOpen: !this.state.isOpen})}}>
                <img src="../img/img_01.png" alt=""/>
                <span>{this.props.name}</span>
            </button>
            {this.state.isOpen && this.expandRecipe()}
        </div>
        );
    }

    expandRecipe() {
        return(
            <div className="bg-gray-100 w-full h-auto rounded-lg grid">
                <div>
                    <h1 className="float-left m-5 font-bold">{this.props.name}</h1>
                    <img className="float-right m-5" src="../img/img_01.png" alt=""></img>
                </div>
                <div>
                    <h3 className="m-5 font-semibold">Ingredienser:</h3>
                    <ul className="m-5">
                        <li>Ingrediens 1</li>
                        <li>Ingrediens 2</li>
                        <li>Ingrediens 3</li>
                        <li>Ingrediens 4</li>
                    </ul>
                </div>
                <div>
                    <h3 className="m-5 font-semibold">Instruksjoner:</h3>
                    <p className="m-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                    <p className="m-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                    adipisci velit, sed quia non numquam eius modi qui dolorem ipsum illo.</p>
                    <p className="m-5">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit 
                    laboriosam, nisi ut aliquid ex ea commodi laudantium iste natus eaque ipsa.</p>
                    <p className="m-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.</p>
                </div>
            </div>
        );
    }

}

export default ExpandRecipe;