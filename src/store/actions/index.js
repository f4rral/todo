import * as actionTypes from './actionTypes';

export function addTodo(text) {
  return {
    type: actionTypes.TODO.ADD,
    id: Date.now(),
    completed: false,
    text: text
  };
}

function loadTodo(items) {
  return {
    type: actionTypes.API.LOAD_TODOS,
    items: items
  }
}

export function toggleTodo(id) {
  return {
    type: actionTypes.TODO.TOGGLE,
    id: id
  };
}

export function deleteTodo(id) {
  return {
    type: actionTypes.TODO.DELETE,
    id: id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: actionTypes.FILTER.SET,
    filter: filter
  };
}

export function fetchTodo() {
  return {
    type: actionTypes.API.FETCH_TODOS
  }
}

export function resolveTodos(isResolve) {
  return {
    type: actionTypes.API.RESOLVE_TODOS,
    isResolve: isResolve
  }
}


export function fetchLoadTodo(limit = 10) {
  return function(dispatch, getState) {
    dispatch(fetchTodo())

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then(
      response => {
        dispatch(resolveTodos(true));
        return response.json();
      },
      error => {
        dispatch(resolveTodos(false));
        return [];
      })
    .then(json => dispatch(loadTodo(json)))
  }
}
