import { CheckIcon } from '../TodoIcon/CheckIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import "./TodoItem.css";




function TodoItem({completed, text, onComplete, onDelete} ) {

  // const [isCompleted, setIsCompleted] = React.useState(false);

  // function changeCompletedValue () {
  //     setIsCompleted(!completed)
  // }

  // completed = isCompleted

    return(
      <li className="TodoItem">

          <CheckIcon 
            completed={completed}
            onComplete={onComplete}
          />
          

        {/* <span 
          onClick={onComplete} 
          className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
          >V
        </span> */}
        <p 
          className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
          >{text}
        </p>

        <DeleteIcon 
          onDelete={onDelete}
        />
        {/* <span 
          onClick={onDelete} 
          className={`Icon Icon-delete`}
          >X
        </span> */}
      </li>
    )
  }

  export { TodoItem };