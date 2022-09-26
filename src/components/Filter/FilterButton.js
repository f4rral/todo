import React from 'react';
import PropTypes from 'prop-types';

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      className='todos_filter__button'
      onClick={onClick}
      disabled={active}
    >
      {children}
    </button>
  );
}

export default FilterButton;
