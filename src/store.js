const CHANGE_NEW_TODO = "CHANGE_NEW_TODO";
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
  changeNewTodo(newTodo) {
    return {
      type: CHANGE_NEW_TODO,
      newTodo
    };
  },
  addNewTodo(todo) {
    return {
      type: ADD_NEW_TODO,
      todo
    };
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEW_TODO: {
      return {
        ...state,
        newTodo: action.newTodo
      };
    }
    case ADD_NEW_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    default:
      return state;
  }
}
