import React, { useContext } from 'react';
import Context from 'src/context/Context';


const List = () => {
  const { state, setTodoList } = useContext(Context);
  const deleteTodo = (key) => {
    const newList = state.filter(data => data.key !== key);
    setTodoList(newList);
  };
  return (
    state.map(data => (
      <li key={data.key}>
        {data.title}
        <button type="button" onClick={() => deleteTodo(data.key, state, setTodoList)}>削除</button>
      </li>
    ))
  );
};

export default List;
