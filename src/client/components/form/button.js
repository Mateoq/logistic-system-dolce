import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const Button = ({
  id,
  type,
  children,
  className,
  onClick,
  group,
  theme,
  layout,
}) => {
  const componentClass = 'c-button';
  let config = '';

  config += componentHelpers.generateComponentStyleConfig(componentClass, [
    theme,
    layout,
  ]);

  config += className || '';

  return (
    <button
      id={id}
      type={type}
      data-group={group}
      className={`c-button ${config.trim()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  group: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.string,
  layout: PropTypes.string,
};

export default Button;
