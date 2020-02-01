import React, { useState, useReducer } from "react";
import { initialState, taskReducer } from "../reducers/reducer";
import Task from "./Task";

const Tasks = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [newTask, setNewTask] = useState("");

    const handleChanges = e => {
        setNewTask(e.target.value);
    };

    const handleAddTask = e => {
        dispatch({ type: "ADD_TASK" });
    };

    return (
        <div>
            <section className="task-list">
                <p>{state.task}</p>
            </section>
            <section className="task-form">
                <input
                  className="task-input" 
                  type="text"
                  name="newTaskText"
                  addNewTodo={addNewTodo}
                  value={newTask}
                  onChange={handleChanges}
                />
                <button onClick={handleAddTask}>Add</button>
            </section>
        </div>
    )
}

export default Tasks;