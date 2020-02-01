import React, { useState, useReducer } from "react";
import { initialState, taskReducer } from "../reducers/reducer";
import Task from "../components/Task";

const ListForm = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [newTask, setNewTask] = useState("");

    const handleChanges = e => {
        setNewTask(e.target.value);
        e.preventDefault();
    };

    const handleAddTask = e => {
        dispatch({ type: "ADD_TASK", payload: newTask });
        e.preventDefault();
    };

    return (
        <div>
            <form className="task-form">
                <input
                  className="task-input" 
                  type="text"
                  name="newTaskText"
                  value={newTask}
                  onChange={handleChanges}
                />
                <button onClick={handleAddTask}>Add</button>
            </form>
            <section className="task-list">
                <div>
                    {state.map(todo => (
                        <Task 
                          key={todo.id}
                          todo={todo}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default ListForm;