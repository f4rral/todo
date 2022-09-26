import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { toggleTodo, deleteTodo } from '../../store/actions';

import TodoList from './TodoList';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case actionTypes.FILTER.SHOW_ALL:
      return [...todos.create, ...todos.load];

    case actionTypes.FILTER.SHOW_COMPLETED:
      return [...todos.create, ...todos.load].filter(todo => todo.completed);

    case actionTypes.FILTER.SHOW_ACTIVE:
      return [...todos.create, ...todos.load].filter(todo => !todo.completed);

    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = {
  toggleTodo: toggleTodo,
  deleteTodo: deleteTodo
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
