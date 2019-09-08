import { handleActions } from 'redux-actions';
import { ADD_TODO, DELETE_TODO } from '../actions/ActionTypes';

const initialState = {
  todoList: [],
};

const todo = handleActions({
  [ADD_TODO]: (state, action) => ({
    ...state,
    todoList: [...state.todoList, action.payload.text],
  }),
  [DELETE_TODO]: (state, action) => {
    const list = state.todoList.filter((data, index) => index !== action.payload);
    return ({
      ...state,
      todoList: list,
    });
  },
}, initialState);

export default todo;
