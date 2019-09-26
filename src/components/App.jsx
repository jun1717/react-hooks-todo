import React, { useState } from 'react';
import Form from 'src/components/Form';
import List from 'src/components/List';
import Context from 'src/context/Context';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  return (
    <Context.Provider value={{ state: todoList, setTodoList }}>
      <h3>Todo Sample</h3>
      <Form />
      <List />
    </Context.Provider>
  );
};
export default App;
