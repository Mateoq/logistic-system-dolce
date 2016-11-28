import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const SelectBox = ({
  name,
  options,
  onChange,
  className,
  placeholder,
  theme,
  layout,
}) => {
  const componentClass = 'input-box';
  let config = '';

  config += componentHelpers.generateComponentStyleConfig(componentClass, [
    theme,
    layout,
  ]);

  config += className || '';

  return (
    <select
      name={name}
      id={name}
      className={`c-field ${config.trim()}`}
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
};

SelectBox.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  theme: PropTypes.string,
  layout: PropTypes.string,
};

export default SelectBox;
