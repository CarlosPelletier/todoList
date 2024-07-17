<<<<<<< HEAD
import React from "react";
import { TodoIcon } from ".";

function CheckIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

=======
import React from "react";
import { TodoIcon } from ".";

function CheckIcon({ completed, onComplete }) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
export { CheckIcon }; 