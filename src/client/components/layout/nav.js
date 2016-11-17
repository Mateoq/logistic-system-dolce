import React, { PropTypes } from 'react';

const Nav = ({
  children,
  className,
  inline,
  position,
  theme,
  layout,
}) => {
  let config = '';

  if (inline) {
    config += 'c-nav--inline ';
  }

  if (position) {
    config += `c-nav--${position} `;
  }

  if (theme) {
    config += `c-nav--${theme} `;
  }

  if (layout) {
    config += `c-nav--${layout} `;
  }

  config += className || '';

  return (
    <nav className={`c-nav ${config}`}>
      {children}
    </nav>
  );
};

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool,
  position: PropTypes.string,
  theme: PropTypes.string,
  layout: PropTypes.string,
};

export default Nav;
