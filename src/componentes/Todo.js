import React from "react"
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

function Todo({ todo, completado, eliminar }){

    function handleCheckBoxclick() {
        completado(todo.id);
    }

    function handleRemoveClick(){
        eliminar(todo.id)
    }

    return (
        <ListItem style={{display:"flex"}}>
            <Checkbox
                checked={todo.completado}
                onClick={handleCheckBoxclick}
            />
            
            <Typography 
                variant="body1"
                style={{
                    textDecoration: todo.completado ? "line-through": null
                }}>
                {todo.tarea}
            </Typography>
            
            <IconButton onClick={handleRemoveClick}><CloseIcon/></IconButton>
        </ListItem>
    );
}

export default Todo;