import React from 'react';
import Context from 'src/context/Context';


const List = () => {
  const deleteTodo = (key, state, setTodoList) => {
    const newList = state.filter(data => data.key !== key);
    setTodoList(newList);
  };
  return (
    <Context.Consumer>
      {({ state, setTodoList }) => (
        state.map(data => (
          <li key={data.key}>
            {data.title}
            <button type="button" onClick={() => deleteTodo(data.key, state, setTodoList)}>削除</button>
          </li>
        )))}
    </Context.Consumer>
  );
};

export default List;
