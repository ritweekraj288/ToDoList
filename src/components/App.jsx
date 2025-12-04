import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      );
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>✓ My Tasks</h1>
        <p>Stay organized and productive</p>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text"
          value={inputText}
          placeholder="Add a new task..."
        />
        <button onClick={addItem}>
          <span>+ Add</span>
        </button>
      </div>
      <div className="tasks-section">
        <ul className="tasks-list">
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
      {items.length > 0 && (
        <div className="stats">
          <strong>{items.length}</strong> task{items.length !== 1 ? "s" : ""} in your list
        </div>
      )}
    </div>
  );
}

export default App;
