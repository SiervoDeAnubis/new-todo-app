const ADD_NEW_TODO = "ADD_NEW_TODO";

const initialState = {
  message: "hello world!!",
  newTodo: "",
  todos: [
    {
      title: "Learn ES6",
      done: false
    },
    {
      title: "Learn React",
      done: false
    },
    {
      title: "Learn Redux",
      done: false
    },
    {
      title: "Learn Redux Saga",
      done: false
    }
  ]
};

export const actions = {
  newTodoChange(newTodo) {
    return {
      type: ADD_NEW_TODO,
      newTodo
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_TODO: {
      return {
        ...state,
        newTodo: action.newTodo
      };
    }
    default:
      return state;
  }
}
