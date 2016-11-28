import React, { PropTypes } from 'react';

// Components.
import { RadioButton } from '../';

const ButtonGridCell = ({
  children,
  value,
  name,
  checked,
  onChange,
}) => {
  const componentClass = 'buttons-grid__cell';
  let config = `${componentClass} `;

  if (checked) {
    config += `${componentClass}--active `;
  }

  return (
    <div className="c-list__item">
      <RadioButton
        value={value}
        name={name}
        checked={checked}
        className={config.trim()}
        onChange={onChange}
      >
        <div className="u-absolute-center">{children}</div>
      </RadioButton>
    </div>
  );
}

ButtonGridCell.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default ButtonGridCell;
