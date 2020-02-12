const CHANGE_NEW_TODO = "CHANGE_NEW_TODO";
const ADD_NEW_TODO = "ADD_NEW_TODO";
const TOGGLE_TODO_DONE = "TOGGLE_TODO_DONE";
const ALL_TODOS_DONE = "ALL_TODOS_DONE";
const DELETE_TODO = "DELETE_TODO";

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
  },
  toggleTodoDone(toggle) {
    return {
      type: TOGGLE_TODO_DONE,
      toggle
    };
  },
  allTodosDone() {
    return {
      type: ALL_TODOS_DONE
    };
  },
  deleteTodo(todo) {
    return {
      type: DELETE_TODO,
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
    case TOGGLE_TODO_DONE: {
      const todos = [...state.todos];
      todos[action.toggle.index] = {
        ...todos[action.toggle.index],
        done: action.toggle.done
      };
      return {
        ...state,
        todos
      };
    }
    case ALL_TODOS_DONE: {
      const todos = state.todos.map(todo => ({ ...todo, done: true }));
      return {
        ...state,
        todos
      };
    }
    case DELETE_TODO: {
      const todos = [...state.todos];
      todos.splice(action.todo.index, 1);
      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
}
