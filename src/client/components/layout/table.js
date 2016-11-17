import React, { PropTypes } from 'react';

const Table = ({ children, className }) => (
  <div className={`c-table ${className}`}>
    {children}
  </div>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Table;
