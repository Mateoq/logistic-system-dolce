import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Animations
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

// Components.
import { Loading } from '../../components/';

const LoadingContainer = ({ isLoading }) => {
  const loading = isLoading && (<Loading key={'loading-view'} />);
  return (
    <ReactCssTransitionGroup
      transitionName={'simple-transition'}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={700}
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
