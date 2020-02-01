export const initialState = {
    task: 'Finish project',
    completed: false,
    id: ""
}

const addNewTodo = newTaskName => {
    const AddTask = {
        task: newTaskName.name,
        completed: false,
        id: new Date()
    }

    const newTaskList = [...state, AddTask];
              setNewTask(newTaskList);
}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
              
            };
        default:
            return state;    
    }
};

