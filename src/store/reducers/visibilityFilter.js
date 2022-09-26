import * as actionTypes from '../actions/actionTypes';

function visibilityFilter(state = actionTypes.FILTER.SHOW_ALL, action) {
  switch (action.type) {
    case actionTypes.FILTER.SET:
      return action.filter;

    default:
      return state;
  }
}

export default visibilityFilter;
