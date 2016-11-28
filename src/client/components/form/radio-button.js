import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const RadioButton = ({
  children,
  className,
  value,
  onChange,
  name,
  checked,
  theme,
  layout,
}) => {
  const componentClass = 'radio-button';
  let config = '';

  config += componentHelpers.generateComponentStyleConfig(componentClass, [
    theme,
    layout,
  ]);

  config += className || '';

  return (
    <label
      htmlFor={name}
      className={`c-field c-field--choice c-label ${config.trim()}`}
    >
      <input
        id={name}
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

RadioButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  value: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  name: PropTypes.string,
  checked: PropTypes.bool,
  theme: PropTypes.string,
  layout: PropTypes.string,
};

export default RadioButton;
