import React, { useState, useReducer } from "react";
import { initialState, taskReducer } from "../reducers/reducer";

const Tasks = () => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <p>{state.task}</p>
    )
}

export default Tasks;