<<<<<<< HEAD
import React from "react";
import { TodoIcon } from ".";

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon 
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

=======
import React from "react";
import { TodoIcon } from ".";

function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon 
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

>>>>>>> dedf4795927cc9233dec2d0a6a192fd6a51427cf
export { DeleteIcon };