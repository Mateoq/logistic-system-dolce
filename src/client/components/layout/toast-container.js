import React, { PropTypes } from 'react';

const ToastContainer = ({
  children,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}) => {
  const componentClass = 'c-alerts';
  let config = '';

  if (topLeft) {
    config += 'c-alerts--topleft ';
  }

  if (topRight) {
    config += 'c-alerts--topright ';
  }

  if (bottomLeft) {
    config += 'c-alerts--bottomleft ';
  }

  if (bottomRight) {
    config += 'c-alerts--bottomright ';
  }

  return (
    <div className={`${componentClass} ${config.trim()}`}>
      {children}
    </div>
  );
};

ToastContainer.propTypes = {
  children: PropTypes.node.isRequired,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  bottomLeft: PropTypes.bool,
  bottomRight: PropTypes.bool,
};

export default ToastContainer;
