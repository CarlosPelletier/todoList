<<<<<<< HEAD
import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/Index';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)

  const message = totalTodos === 0 ? 'No hay tareas pendientes' : `Has completado ${completedTodos} de ${totalTodos} Todo's` ;

    return(
      <h1 className="TodoCounter">
        {/* Has completado <span>{completed}</span> de <span>{total}</span> Todo's */}
        {message}
      </h1>
    )
  }

=======
import './TodoCounter.css';

function TodoCounter({ total, completed, totalTodos}) {

  const message = totalTodos === 0 ? 'No hay tareas pendientes' : `Has completado ${completed} de ${total} Todo's` ;

    return(
      <h1 className="TodoCounter">
        {/* Has completado <span>{completed}</span> de <span>{total}</span> Todo's */}
        {message}
      </h1>
    )
  }

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
  export { TodoCounter };