import React from 'react'

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from '../contexts/TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { CongratModal } from '../CongratModal';
// import { AppEj } from "./AppEj";

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        cumplirTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        openCongratModal,
        setOpenCongratModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter setOpenCongratModal={setOpenCongratModal} />
            <TodoSearch />
            <TodoList >
                {error && <TodosError error={error}/>}
                {loading && <TodosLoading/>}
                {(!loading && !searchedTodos.length) && <EmptyTodos/>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => cumplirTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <div>
                    <TodoForm/>
                    </div>
                </Modal>
            )}

            {openCongratModal && (
                <CongratModal setOpenCongratModal={setOpenCongratModal}/>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
            {/* <AppEj/> */}
        </>
    );
}

export { AppUI };