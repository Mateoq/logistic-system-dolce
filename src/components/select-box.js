import React, { PropTypes } from 'react';

const SelectBox = ({ children, onChange }) => (
  <select className="c-field" onChange={onChange}>
    {children}
  </select>
);

SelectBox.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.function,
};

export default SelectBox;
