import React from "react";
import {useState} from "react";
import ModalContent from "./ModalContent";
import "../tailwind.css";

function ModalWindow() {

    const [modalOpen, setModalOpen] = useState(false);

	return (
		<div className="grid">
			<button className="modal w-4/5 h-64 rounded-lg" type="button" 
                    onClick={() => { setModalOpen(true);}} >
                <img src="../img/img_01.png" alt=""/>
                <span>Dette er oppskrift navnet!</span>
            </button>
            {modalOpen && <ModalContent setOpenModal={setModalOpen}/>}
		</div>
	);
}

export default ModalWindow;