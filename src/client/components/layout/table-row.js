import React, { PropTypes } from 'react';

const TableRow = ({ classNames, children }) => (
  <div className={`c-table__row ${classNames}`}>
    {children}
  </div>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};

export default TableRow;
