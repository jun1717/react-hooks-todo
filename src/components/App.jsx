import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as IndexActions from 'src/actions/index';
import { bindActionCreators } from 'redux';


const App = (props) => {
  const { todoList, actions } = props;
  const [text, setText] = useState('');
  const add = () => {
    setText('');
    actions.addTodo({ text });
  };
  return (
    <div>
      Todo Sample
      <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <br />
        <button type="button" onClick={() => add()}>Add</button>
        <br />
        {todoList.map((data, index) => (
          <li key={Math.random()}>
            <span style={{ paddingRight: '5px' }}>{data}</span>
            <button type="button" onClick={() => actions.deleteTodo(index)}> delete</button>
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
