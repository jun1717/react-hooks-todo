import React, { useContext } from 'react';
import Context from 'src/context/Context';
import { DELETE_TODO } from 'src/actions/ActionTypes';


const List = () => {
  const { state, dispatch } = useContext(Context);
  const deleteTodo = (key) => {
    dispatch({
      type: DELETE_TODO,
      key,
    });
  };
  return (
    state.todo.map(data => (
      <li key={data.key}>
        {data.title}
        <button type="button" onClick={() => deleteTodo(data.key)}>削除</button>
      </li>
    ))
  );
};

export default List;
