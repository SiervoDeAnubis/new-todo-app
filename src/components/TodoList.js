import React from "react";
import ListItem from "./ListItem";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map(({ title, done }, index) => (
        <ListItem
          key={index}
          title={title}
          done={done}
          index={index}
          handleCheck={props.handleCheck}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
