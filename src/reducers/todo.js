import { handleActions } from 'redux-actions';
import { ADD_TODO } from '../actions/ActionTypes';

const initialState = {
  todoList: [],
};

const todo = handleActions({
  [ADD_TODO]: (state, action) => ({
    ...state,
    todoList: [...state.todoList, action.payload.text],
  }),
}, initialState);

export default todo;
