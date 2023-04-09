import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../contexts/TodoContext";
// const defaultItem = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'tomar curso de intro a react', completed: false },
//   { text: 'terminar el libro', completed: false },
//   { text: 'estudiar', completed: false }
// ]

function App() {
  // React.useEffect(() => {
  //   console.log('Effect')
  // }, [totalTodos])
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
