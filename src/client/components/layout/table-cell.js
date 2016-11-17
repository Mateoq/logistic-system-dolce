import React, { PropTypes } from 'react';

const TableCell = ({ children, classNames }) => (
  <span className={`c-table__cell ${classNames}`}>
    {children}
  </span>
);

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};

export default TableCell;
