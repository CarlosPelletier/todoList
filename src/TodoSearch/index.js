<<<<<<< HEAD

import "./TodoSearch.css";
import React from "react";
import { TodoContext } from "../TodoContext/Index";

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)


    return(
      <input 
      placeholder="Busca un Todo"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
    )
  }

=======

import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue}) {


    return(
      <input 
      placeholder="Coratar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
      />
    )
  }

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
  export { TodoSearch };