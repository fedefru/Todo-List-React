import React from "react";
import Todo from "./Todo"
import { List } from "@material-ui/core"
function TodoList({todos, completado, eliminar}){
    return (
        <List>
            {todos.map( todo => {
                return <Todo key={todo.id} todo={todo} completado={completado} eliminar={eliminar}/>
            })}
        </List>
    );
}

export default TodoList;