import { CREATE_TASK, CHANGE_TASK_COLUMN, DELETE_TASK, CHANGE_TASK_COLUMN_BACK } from './types';

export const createTask = (task_data) => ({
  type: CREATE_TASK,
  task: task_data,
});

export const changeTaskColumn = (task_id, current_column) => ({
  type: CHANGE_TASK_COLUMN,
  task_id: task_id,
  current_column: current_column,
});

export const changeTaskColumnBack = (task_id, current_column) => ({
  type: CHANGE_TASK_COLUMN_BACK,
  task_id: task_id,
  current_column: current_column,
});

export const deleteTask = (task_id) => ({
  type: DELETE_TASK,
  task_id: task_id,
});
