import { CREATE_TASK, CHANGE_TASK_COLUMN, DELETE_TASK } from './types';

const defaultState = [];

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.task];

    case CHANGE_TASK_COLUMN:
      const newState = [...state];
      const taskIndex = state.findIndex((task) => task.id === action.task_id);
      newState[taskIndex].column = action.current_column + 1;
      return newState;
      
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.task_id);
    default:
      return state;
  }
};

export default tasks;
