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

  export { TodoCounter };