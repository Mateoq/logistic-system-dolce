import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Styles.
import '../../styles/components/_nav-item.scss';

const NavItem = ({
  children,
  className,
  right,
  active,
  link,
  onClick,
}) => {
  let config = '';

  if (right) {
    config += 'c-nav__item--right ';
  }

  if (active) {
    config += 'c-nav__item--active ';
  }

  config += className || '';

  if (link) {
    config += 'c-nav__item--link';
    return (
      <Link className={`c-nav__item ${config}`} to={link}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    config += 'c-nav__item--cta';
    return (
      <button onClick={onClick} className={`c-nav__item ${config}`}>
        {children}
      </button>
    );
  }

  return (
    <div className={`c-nav__item ${config}`}>
      {children}
    </div>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  right: PropTypes.bool,
  active: PropTypes.bool,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavItem;
