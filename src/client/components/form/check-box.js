import React, { PropTypes } from 'react';

const CheckBox = ({
  children,
  onChange,
  name,
  value,
  classNames,
}) => (
  <label htmlFor={name} className={`o-form-element c-label ${classNames}`}>
    <input
      id={name}
      name={name}
      type="checkbox"
      value={value}
      onChange={onChange}
    />
    {children}
  </label>
);

CheckBox.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  classNames: PropTypes.string,
};

export default CheckBox;
