import React, { useState } from 'react';
import Context from 'src/context/Context';


const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addTodo = (state, setTodoList) => {
    const list = [...state, { key: Math.random(), title, body }];
    setTodoList(list);
    setTitle('');
    setBody('');
  };

  return (
    <Context.Consumer>
      {({ state, setTodoList }) => (
        <>
          <div>タイトル</div>
          <input value={title} onChange={e => setTitle(e.target.value)} />
          <div>テキスト</div>
          <textarea value={body} onChange={e => setBody(e.target.value)} />
          <div>
            <button type="button" onClick={() => addTodo(state, setTodoList)}>追加</button>
          </div>
        </>
      )}
    </Context.Consumer>
  );
};

export default Form;
