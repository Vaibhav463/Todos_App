import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "45px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className=" my-4">Todos List</h3>
            {props.todos.length===0? "No Tosos to display":
            props.todos.map((todo)=>{
                return (
                     <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    
                )
            
            })}
            
        </div>
    )
}
