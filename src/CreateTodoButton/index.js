<<<<<<< HEAD
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

=======
import './CreateTodoButton.css';

function CreateTodoButton() {
    return( 
      <button className="CreateTodoButton"> + </button>
    )
  }

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
export { CreateTodoButton };