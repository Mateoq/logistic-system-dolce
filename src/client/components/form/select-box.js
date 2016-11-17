import React, { PropTypes } from 'react';

const SelectBox = ({
  name,
  options,
  onChange,
  classNames,
  placeholder,
}) => (
  <select
    name={name}
    id={name}
    className={`c-field ${classNames}`}
    onChange={onChange}
  >
    <option value="none">{placeholder}</option>
    {options.map((option, key) => (
      <option key={key} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

SelectBox.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
};

export default SelectBox;
