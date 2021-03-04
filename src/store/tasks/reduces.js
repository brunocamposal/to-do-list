import { CREATE_TASK } from './types';

const defaultState = [];

const numbers = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.task];
    default:
      return state;
  }
};

export default numbers;
