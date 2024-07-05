
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

  export { TodoSearch };