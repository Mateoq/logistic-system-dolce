import React, { PropTypes } from 'react';

const Grid = ({
  children,
  className,
  padding,
  wrap,
  layout,
}) => {
  let config;

  if (padding === false) {
    config += 'o-grid--no-gutter ';
  }

  if (wrap) {
    config += 'o-grid--wrap ';
  }

  if (layout) {
    config += `o-grid--${layout} `;
  }

  config += className || '';

  return (
    <div className={`o-grid ${config}`}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  padding: PropTypes.bool,
  wrap: PropTypes.bool,
  layout: PropTypes.string,
};

export default Grid;
