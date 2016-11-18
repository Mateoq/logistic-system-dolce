import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const Nav = ({
  children,
  className,
  inline,
  position,
  theme,
  layout,
}) => {
  const componentClass = 'c-nav';
  let config = '';

  if (inline) {
    config += 'c-nav--inline ';
  }

  config += componentHelpers.generateComponentStyleConfig(componentClass, [
    position,
    theme,
    layout,
  ]);

  config += className || '';

  return (
    <nav className={`${componentClass} ${config.trim()}`}>
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
