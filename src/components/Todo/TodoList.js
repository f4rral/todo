import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <div className='todos_items'>
      <ul className='todos_items__list'>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
