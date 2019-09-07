import React, { useState } from 'react';


const App = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const addTodo = () => {
    if (text === '') {
      return;
    }
    setText('');
    setTodo([...todo, text]);
  };
  const deleteTodo = (idx) => {
    const list = todo.filter((data, index) => index !== idx);
    setTodo([list]);
  };
  return (
    <div>
      Todo Sample
      <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <br />
        <button type="button" onClick={() => addTodo()}>Add</button>
        <br />
        {todo.map((data, index) => (
          <li key={Math.random()}>
            <span style={{ paddingRight: '5px' }}>{data}</span>
            <button type="button" onClick={() => deleteTodo(index)}> delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};
export default App;
