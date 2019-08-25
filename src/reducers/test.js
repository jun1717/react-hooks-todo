import { handleActions } from 'redux-actions';
import { TEST_ACTION } from '../actions/ActionTypes';

const initialState = {
  flg: false,
};

const test = handleActions({
  [TEST_ACTION]: state => ({
    ...state,
    flg: !state.flg,
  }),
}, initialState);

export default test;
