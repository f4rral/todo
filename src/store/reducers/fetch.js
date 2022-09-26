import * as actionTypes from '../actions/actionTypes';

const initFetch = {
  isFetchTodos: false,
  isResolveTodos: true
}

function fetch(state = initFetch, action) {
  switch (action.type) {
    case actionTypes.API.FETCH_TODOS:
      return { ...state, isFetchTodos: true };

    case actionTypes.API.RESOLVE_TODOS:
      return {
        ...state,
        isFetchTodos: false,
        isResolveTodos: action.isResolve
      };

    default:
      return state;
  }
}

export default fetch;
