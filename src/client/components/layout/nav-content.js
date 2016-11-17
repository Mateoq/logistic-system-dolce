import React, { PropTypes } from 'react';

const NavContent = ({ children, className }) => (
  <div className={`c-nav__content ${className || ''}`}>
    {children}
  </div>
);

NavContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default NavContent;
