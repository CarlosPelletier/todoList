import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext/Index';
import React from 'react';

function CreateTodoButton() {

  const {openModal, setOpenModal} = React.useContext(TodoContext);

  function changeModal () {
    setOpenModal(!openModal)
  }

    return( 
      <button 
        onClick={changeModal}
        className="CreateTodoButton"
      > + </button>
    )
  }

export { CreateTodoButton };