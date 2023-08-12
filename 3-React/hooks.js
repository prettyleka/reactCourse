///Increase Value
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;

import React from "react";
import Counter from "./problem";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputField/>
    </div>
  );
}

//get text ftom input

import React, { useState } from 'react';

function InputField() {
  const [text, setText] = useState('');

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Input text: {text}</p>
    </div>
  );
}

export default InputField;


///Toggle Visibility
import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <button onClick={handleToggleVisibility}>Show/Hide Text</button>
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility;

//Character Counter

import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');

  function handleTextareaChange(event) {
    setText(event.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleTextareaChange} />
      <p>Character count: {text.length}</p>
    </div>
  );
}

export default CharacterCounter;

//Todo List

import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  }

  function handleDelete(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


//color switcher

import React, { useState } from 'react';

function ColorSwitcher() {
  const [bgColor, setBgColor] = useState('');

  function handleColorChange(event) {
    setBgColor(event.target.value);
  }

  return (
    <div>
      <select onChange={handleColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div style={{ backgroundColor: bgColor, width: '100px', height: '100px' }}></div>
    </div>
  );
}

export default ColorSwitcher;







