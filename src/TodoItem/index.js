import React from "react";

import './TodoItem.css'
import { CheckIcon } from '../TodoIcon/CheckIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';


function TodoItem(props) {
    // const onComplete = () => {
    //     alert('ya completaste el todo ' + props.text)
    // };
    // const onDelete = () => {
    //     // const deleteTodos = props.todos.filter(todo => todo.text !== props.text);
    //     // return deleteTodos
    //     alert('eliminaste el todo ' + props.text)
    // };
    return (
        <li className="TodoItem">
            <CheckIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };
