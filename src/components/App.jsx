import React, { useReducer } from 'react';
import Form from 'src/components/Form';
import List from 'src/components/List';
import Context from 'src/context/Context';
import reducer from 'src/reducers';

const App = () => {
  const initialState = {
    todo: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ width: '300px', margin: '0 auto' }}>
      <Context.Provider value={{ state, dispatch }}>
        <h3>Todo Sample</h3>
        <Form />
        <List />
      </Context.Provider>
    </div>
  );
};
export default App;
