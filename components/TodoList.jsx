import { useState } from 'react';

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed !== '') {
      setItems([...items, trimmed]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (indexToDelete) => {
    setItems(items.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div>
      <div className="todo-container">
        <form onSubmit={handleAddItem} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add List</button>
        </form>

        <div className="todo-title-list">List of Items</div>

        <div className="todo-items-list">
          {items.map((item, index) => (
            <div key={index} className="todo-item-container">
              <span className="todo-item-text">{item}</span>
              <button type="button" onClick={() => handleDeleteItem(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
