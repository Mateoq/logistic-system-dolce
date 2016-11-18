import React, { PropTypes } from 'react';

const TableCell = ({ children, className }) => (
  <span className={`c-table__cell ${className || ''}`}>
    {children}
  </span>
);

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TableCell;
