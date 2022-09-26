import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

function CheckBox({ checked, onChange }) {
  return (
    <label className="container">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {onChange()}}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default CheckBox;