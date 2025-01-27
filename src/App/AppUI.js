<<<<<<< HEAD
import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading/Index';
import { TodoError } from '../TodoError/Index';
import { EmptyTodo } from '../EmptyTodo/Index';
import { TodoContext } from '../TodoContext/Index';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoCounter />
      <TodoSearch />
  
    
        <TodoList>
        {loading && 
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        }
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodo />}
  
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      
      <CreateTodoButton />

      {openModal && (

        <Modal>
          <TodoForm />
        </Modal>  
      )}  

      {/* <CreatePayMethodButton /> */}
    </>
  
  
  )
}


=======
import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoLoading } from '../TodoLoading/Index';
import { TodoError } from '../TodoError/Index';
import { EmptyTodo } from '../EmptyTodo/Index';
import { TodoContext } from '../TodoContext/Index';


function AppUI() {

  return (
    <>
      <TodoCounter />
      <TodoSearch />
  
    <TodoContext.Consumer>
      {({
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }) => (
        <TodoList>
        {loading && 
          <>
            <TodoLoading />
            <TodoLoading />
            <TodoLoading />
          </>
        }
        {error && <TodoError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodo />}
  
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      )}
    </TodoContext.Consumer>
  
      <CreateTodoButton /> 
      {/* <CreatePayMethodButton /> */}
    </>
  
  
  )
}


>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
export { AppUI };