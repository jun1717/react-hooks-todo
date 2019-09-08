import { createAction } from 'redux-actions';
import { ADD_TODO, DELETE_TODO } from './ActionTypes';

export const addTodo = createAction(ADD_TODO, text => text);

export const deleteTodo = createAction(DELETE_TODO, index => index);
