<<<<<<< HEAD
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG} from './delete.svg'
import './TodoIcon.css';


const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg'fill={color}/>,
}


const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span
    className={`Icon-container Icon-container-${type} `}
    onClick={onClick}
    >
        {iconTypes[type](color)}
        
    </span>
  )
}

=======
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG} from './delete.svg'
import './TodoIcon.css';


const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg' fill={color}/>,
    "delete": (color) => <DeleteSVG className='Icon-svg'fill={color}/>,
}


const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span
    className={`Icon-container Icon-container-${type} `}
    onClick={onClick}
    >
        {iconTypes[type](color)}
        
    </span>
  )
}

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
export {TodoIcon};