import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import fetch from './fetch';

export default combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter,
  fetch: fetch
});