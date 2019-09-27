import React, { useState, useContext } from 'react';
import Context from 'src/context/Context';

const styles = {
  inputTitle: {
    width: '100%',
  },
  inputText: {
    width: '100%',
  },
};


const Form = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { state, setTodoList } = useContext(Context);

  const addTodo = () => {
    const list = [...state, { key: Math.random(), title, body }];
    setTodoList(list);
    setTitle('');
    setBody('');
  };

  return (
    <>
      <div>タイトル</div>
      <input value={title} onChange={e => setTitle(e.target.value)} style={styles.inputTitle} />
      <div>テキスト</div>
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        style={styles.inputTitle}
      />
      <div>
        <button type="button" onClick={() => addTodo()}>追加</button>
      </div>
    </>
  );
};

export default Form;
