import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from 'elements/CheckBox/CheckBox';

Todo.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

function Todo({ onToggle, onDelete, completed, text }) {
  return (
    <li
      className='todos_items__item'
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      <div className='todos_items__item_toggle'>
        <CheckBox
          onChange={onToggle}
          checked={completed}
        />
      </div>

      <span
        className='todos_items__item_text'
        onClick={onToggle}
      >
        {text}
      </span>
      <button
        className='todos_items__item_delete'
        onClick={onDelete}
      />
    </li>
  );
}

export default Todo;
