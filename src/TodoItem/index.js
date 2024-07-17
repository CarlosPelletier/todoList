<<<<<<< HEAD
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

=======
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

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
  export { TodoItem };