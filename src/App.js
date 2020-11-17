import React, { useState, useEffect } from "react"
import './App.css';
import TodoForm from "./componentes/TodoForm"
import TodoList from "./componentes/TodoList";
import Typography from "@material-ui/core/Typography"

function App() {

  const [todos, setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = "react-todo-list";

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos !== undefined) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function completado(id) {
    setTodos(
      todos.map( todo => {
        if(todo.id === id){
          return {
            ...todo,
            completado: !todo.completado
          };
        }
        return todo;
      })
    );
  }

  function eliminar(id){
    setTodos(todos.filter( todo => todo.id !== id)
    );
  }

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      
        <Typography style={{padding: 16}} variant="h1">  To do List </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} completado={completado} eliminar={eliminar} />
      
    </div>
  );
}

export default App;
