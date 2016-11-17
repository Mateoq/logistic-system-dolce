import React, { PropTypes } from 'react';

const GridCell = ({
  children,
  className,
  width,
  padding,
  fixedWidth,
  responsiveSuffixes,
}) => {
  let config = '';

  if (width) {
    config += `o-grid__cell--width-${width} `;
  }

  if (responsiveSuffixes) {
    config += responsiveSuffixes.reduce((responsiveConfig, nextSufix) => (
      `o-grid__cell--width-${nextSufix.width}@${nextSufix.target} `
    ), '');
  }

  if (padding === false) {
    config += 'o-grid__cell--no-gutter ';
  }

  if (fixedWidth) {
    config += 'o-grid__cell--width-fixed';
  }

  return (
    <div className={`o-grid__cell ${config} ${className}`}>
      {children}
    </div>
  );
};

GridCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  width: PropTypes.number,
  padding: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  responsiveSuffixes: PropTypes.arrayOf(PropTypes.shape()),
};

export default GridCell;
