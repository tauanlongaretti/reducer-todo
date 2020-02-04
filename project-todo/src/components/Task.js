import React from "react";

const Task = props => {
  return (
    <div>
      <p
        onClick={e => props.toggleCompleted(props.todo.id)}
        className={`todo${props.todo.completed ? " completed" : ""}`}
      >
        {props.todo.task}
      </p>
    </div>
  );
};

export default Task;
