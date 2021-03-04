import {
  CREATE_TASK,
  CHANGE_TASK_COLUMN,
  DELETE_TASK,
  CHANGE_TASK_COLUMN_BACK,
} from './types';

const defaultState = [];

const tasks = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [...state, action.task];

    case CHANGE_TASK_COLUMN:
      const taskAdvance = [...state];
      const taskAdvanceIndex = state.findIndex(
        (task) => task.id === action.task_id
      );
      taskAdvance[taskAdvanceIndex].column = action.current_column + 1;
      return taskAdvance;

    case CHANGE_TASK_COLUMN_BACK:
      const taskBack = [...state];
      const taskBackIndex = state.findIndex(
        (task) => task.id === action.task_id
      );
      taskBack[taskBackIndex].column = action.current_column - 1;
      return taskBack;

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.task_id);
    default:
      return state;
  }
};

export default tasks;
