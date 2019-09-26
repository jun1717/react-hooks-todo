import React from 'react';
import Context from 'src/context/Context';


const List = () => (
  <Context.Consumer>
    {({ state }) => (
      state.map(data => <li key={Math.random()}>{data.title}</li>)
    )}
  </Context.Consumer>
);

export default List;
