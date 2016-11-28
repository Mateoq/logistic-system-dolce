import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const PillarBox = ({
  children,
  className,
  size,
}) => {
  const componentClass = 'u-pillar-box';
  let config = '';

  config += componentHelpers.generateComponentStyleConfig(componentClass, [
    size,
  ]);

  config += className || '';

  return (
    <div className={`u-pillar-box ${config.trim()}`}>
      {children}
    </div>
  );
};

PillarBox.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default PillarBox;
