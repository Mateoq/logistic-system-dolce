import React, { PropTypes } from 'react';

const Panel = ({
  children,
  className,
  navTop,
  navBottom,
  layout,
}) => {
  const componentClass = 'o-panel';
  let config = '';

  if (navTop) {
    config += 'o-panel--nav-top ';
  }

  if (navBottom) {
    config += 'o-panel--nav-bottom ';
  }

  if (layout) {
    config += `o-panel--${layout} `;
  }

  config += className || '';

  return (
    <div className={`${componentClass} ${config.trim()}`}>
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  navTop: PropTypes.bool,
  navBottom: PropTypes.bool,
  layout: PropTypes.string,
};

export default Panel;
