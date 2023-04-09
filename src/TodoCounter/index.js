import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../contexts/TodoContext";

function TodoCounter() {
   const { totalTodos, completedTodos } = React.useContext(TodoContext)

    // const estilos = {
    //     color: 'red',
    //     backgroundColor: 'blue'
    // }

    return (
        // <h2 style={estilos}>Has completado 2 de 3 tareas </h2>
        <h2 className="TodoCounter" >Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}

export { TodoCounter };