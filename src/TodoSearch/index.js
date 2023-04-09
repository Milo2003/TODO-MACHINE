import React from "react";
import './TodoSearch.css';
import { TodoContext } from '../contexts/TodoContext'
//Como cambiar el estado con clases
// class Component extends React.Component {
//     constructor(){
//         this.state = {
//             patito: '👍'
//         }
//     }

//     render(){
//         return (
//             <button onClick={()=>this.setState("Has dado un like")}>{this.state.patito}</button>
//         )
//     }
// }

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    };
    return (
        <>
            <input
                className="TodoSearch" placeholder="Buscar"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </>
    )
}

export { TodoSearch };