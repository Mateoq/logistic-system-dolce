import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Animations
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

// Components.
import { Loading } from '../../components/';

const LoadingContainer = ({ isLoading }) => {
  const animation = {
    name: 'simple-transition',
    enterDelay: 300,
    leaveDelay: 700,
  };
  const loading = isLoading && (<Loading key={'loading-view'} />);
  return (
    <ReactCssTransitionGroup
      transitionName={animation.name}
      transitionEnterTimeout={animation.enterDelay}
      transitionLeaveTimeout={animation.leaveDelay}
    >
      {loading}
    </ReactCssTransitionGroup>
  );
};

LoadingContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  state => ({ ...state.loading }),
  null
)(LoadingContainer);
