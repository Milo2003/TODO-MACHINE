import React from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage.hook'

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', [])

    const [searchValue, setSearchValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length >= 1) {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }
    else {
        searchedTodos = todos;
    };
    const addTodo = (text) => {
        const newItem = [...todos];
        newItem.push({
            text,
            completed: false,
        });
        saveTodos(newItem);
    };

    const cumplirTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newItem = [...todos];
        newItem[todoIndex].completed = true;
        saveTodos(newItem);
    };
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newItem = [...todos];
        newItem.splice(todoIndex, 1)
        saveTodos(newItem);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            cumplirTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };