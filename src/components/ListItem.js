import React from "react";

const ListItem = props => {
  return (
    <li key={props.index}>
      <input
        type="checkbox"
        onChange={event => props.handleToggleTodoDone(event, props.index)}
        checked={props.done}
      />{" "}
      <span className={props.done ? "done" : ""}>{props.title}</span>{" "}
      <button onClick={() => props.handleTodoDelete(props.index)}>
        delete todo
      </button>
    </li>
  );
};

export default ListItem;
