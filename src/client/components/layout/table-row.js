import React, { PropTypes } from 'react';

const TableRow = ({ className, children }) => (
  <div className={`c-table__row ${className || ''}`}>
    {children}
  </div>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default TableRow;
