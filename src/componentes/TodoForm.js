import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core"
import {v4 as uuid} from "uuid"; 

function TodoForm({addTodo}) {
    
    const [todo, setTodo] = useState({
        id: "",
        tarea: "",
        completado: false
    });

    function HandleChangesOnInput(e){
        setTodo({...todo, tarea: e.target.value });
    }

    function HandleSubmit(e){
        e.preventDefault();
        if(todo.tarea.trim()){
            addTodo({...todo, id: uuid()});
            //reseteo el todo input 
            setTodo({...todo, tarea: "" });
        }
    }

    return (
        <form className="todo-form" onSubmit={HandleSubmit}>
            <TextField
            label="Tarea" 
            name="tarea"
            type="text"
            onChange={HandleChangesOnInput}
            value={todo.tarea}
            />
            <Button onClick={HandleSubmit}>Enviar</Button>
        </form>
    );

}

export default TodoForm;