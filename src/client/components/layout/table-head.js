import React, { PropTypes } from 'react';

const TableHead = ({ classNames, titles }) => (
  <div className={`c-table__row c-table__row--heading ${classNames}`}>
    {titles.map((title, key) => (
      <span key={key} className={`c-table__cell ${title.classNames}`}>
        {title.text}
      </span>
    ))}
  </div>
);

TableHead.propTypes = {
  classNames: PropTypes.string,
  titles: PropTypes.arrayOf(PropTypes.object),
};

export default TableHead;
