import React, { PropTypes } from 'react';

// Utils.
import { componentHelpers } from '../../utils/';

const Field = ({
  children,
  className,
  listInline,
  layout,
  theme,
}) => {
  const componentClass = 'o-field';
  let config = '';

  if (listInline) {
    config += 'c-list c-list--inline c-list--unstyled ';
  }

  componentHelpers.generateComponentStyleConfig(componentClass, [
    theme,
    layout,
  ]);

  config += className || '';

  return (
    <fieldset className={`o-fieldset ${config.trim()}`}>
      {children}
    </fieldset>
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  listInline: PropTypes.bool,
  layout: PropTypes.string,
  theme: PropTypes.string,
};

export default Field;
