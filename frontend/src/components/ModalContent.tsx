import React from "react";
import "../tailwind.css";

function ModalContent({setOpenModal} : {setOpenModal: any}) {
    return (
        <div className="w-full h-auto bg-gray-200 fixed flex justify-center items-center opacity-95">
            <div className="m-5 w-2/4 bg-white flex flex-col shadow-xl p-2 rounded-lg opacity-95">
                <div className="items-end">
                    <button className="float-right pr-2" onClick={() => {setOpenModal(false);}}>X</button>
                </div>
                <div>
                    <h1 className="float-left m-5 font-bold">Oppskrift navn</h1>
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
        </div>
        );
}

export default ModalContent;