import React, { PropTypes } from 'react';

const InputBox = ({
  value,
  name,
  label,
  type,
  onChange,
  classNames,
  placeholder,
  group,
}) => {
  if (label) {
    return (
      <label htmlFor={name} className={`c-label o-form-element ${classNames}`}>
        {label}
        <input
          id={name}
          type={type || 'text'}
          name={name}
          className="c-field c-field--label"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          data-group={group}
        />
      </label>
    );
  }
  return (
    <input
      id={name}
      name={name}
      type={type || 'text'}
      className="c-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-group={group}
    />
  );
};

InputBox.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
  group: PropTypes.string,
};

export default InputBox;
