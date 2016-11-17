import React, { PropTypes } from 'react';

const Button = ({
  id,
  type,
  children,
  className,
  onClick,
  group,
  theme,
}) => {
  let config = '';

  if (theme) {
    config += `c-button--${theme} `;
  }

  config += className || '';

  return (
    <button
      id={id}
      type={type}
      data-group={group}
      className={`c-button ${config}`}
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
};

export default Button;
