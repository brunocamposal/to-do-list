import { CREATE_TASK } from './types';

export const createTask = (task_data) => ({
  type: CREATE_TASK,
  task: task_data,
});
