import { createStore, combineReducers } from 'redux';
import tasks from './tasks/reduces';

const reducers = combineReducers({ tasks });
const store = createStore(reducers);

export default store;
