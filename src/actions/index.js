import { createAction } from 'redux-actions';
import { ADD_TODO } from './ActionTypes';

export const addTodo = createAction(ADD_TODO, text => text);

export const test = () => { };
