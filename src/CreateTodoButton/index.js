import React from "react";
import './CreateTodoButton.css'

function  CreateTodoButton({openModal, setOpenModal}){
    const onClickButton = () => { 
        setOpenModal(!openModal)
    };
    
    return(
        <button onClick={() => onClickButton(openModal)} className="CreateTodoButton">+</button>
    );
}

export { CreateTodoButton };