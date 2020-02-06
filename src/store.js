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

const actions = {
  addNewTodo(newTodo) {
    return {
      type: ADD_NEW_TODO,
      newTodo
    };
  }
};

export function reducer(state = initialState, action) {
  return state;
}
