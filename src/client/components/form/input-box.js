import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const InputBox = ({
  value,
  name,
  label,
  type,
  onChange,
  className,
  placeholder,
  group,
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

  if (label) {
    return (
      <label htmlFor={name} className={`c-label o-form-element ${config.trim()}`}>
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
      className={`c-field ${config.trim()}`}
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
  className: PropTypes.string,
  placeholder: PropTypes.string,
  group: PropTypes.string,
  theme: PropTypes.string,
  layout: PropTypes.string,
};

export default InputBox;
