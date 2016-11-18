import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const Toast = ({
  children,
  className,
  type,
  theme,
  layout,
}) => {
  const componentClass = 'c-alert';
  let config = componentHelpers.generateComponentStyleConfig(componentClass, [
    type,
    theme,
    layout,
  ]);

  config += className || '';

  return (
    <div className={`${componentClass} ${config.trim()}`}>
      {children}
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  theme: PropTypes.string,
  layout: PropTypes.string,
};

export default Toast;
