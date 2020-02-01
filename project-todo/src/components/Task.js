import React from "react";

const Task = (props) => {
    return (
        <div>
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Task;