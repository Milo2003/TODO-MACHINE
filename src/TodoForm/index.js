import React from 'react'

import './TodoForm.css'
import { TodoContext } from '../contexts/TodoContext'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false)
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    };
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Escribe tu todo aqui ...'
            />
            <div className='TodoForm-buttonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel' type='button' onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add' type='submit'>Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }
