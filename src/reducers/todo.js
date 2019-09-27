import { ADD_TODO, DELETE_TODO } from 'src/actions/ActionTypes';

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { key, title, body } = action;
      return [...state, { key, title, body }];
    }
    case DELETE_TODO: {
      const { key } = action;
      const newList = state.filter(data => data.key !== key);
      return newList;
    }
    default:
      return state;
  }
};

export default todo;
