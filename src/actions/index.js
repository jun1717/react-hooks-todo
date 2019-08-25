import { createAction } from 'redux-actions';
import { TEST_ACTION } from './ActionTypes';

export const actionTest = createAction(TEST_ACTION);

export const test = () => { };
