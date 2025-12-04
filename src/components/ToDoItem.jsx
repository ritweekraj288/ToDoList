import React from "react";

function ToDoItem(props) {
  function handleDelete(e) {
    e.stopPropagation();
    props.onChecked(props.id);
  }

  return (
    <li>
      <span className="todo-text">{props.text}</span>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem;
