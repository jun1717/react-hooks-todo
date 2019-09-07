import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as IndexActions from 'src/actions/index';
import { bindActionCreators } from 'redux';


const App = (props) => {
  const { todoList, actions } = props;
  console.log(todoList, actions);
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  // const addTodo = () => {
  //   if (text === '') {
  //     return;
  //   }
  //   setText('');
  //   setTodo([...todo, text]);
  // };
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
        <button type="button" onClick={() => actions.addTodo({ text })}>Add</button>
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
App.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.string).isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
};

const mapStateToProps = state => ({
  todoList: state.todo.todoList,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(IndexActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
