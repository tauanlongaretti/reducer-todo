export const initialState = [
  {
    task: "Finish project",
    completed: false,
    id: "1234"
  },
  {
    task: "Clean garage",
    completed: false,
    id: "5678"
  }
];

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          task: action.payload,
          completed: false,
          id: new Date()
        }
      ];
    default:
      return state;
  }
};
