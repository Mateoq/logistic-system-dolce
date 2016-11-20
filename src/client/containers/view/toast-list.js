import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Animations.
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

// Components.
import { ToastContainer, Toast } from '../../components/';

const ToastList = ({ toastList }) => {
  const animation = {
    name: 'appear-left-transition',
    enterDelay: 600,
    leaveDelay: 300,
  };

  return (
    <ReactCssTransitionGroup
      component={ToastContainer}
      topLeft
      transitionName={animation.name}
      transitionEnterTimeout={animation.enterDelay}
      transitionLeaveTimeout={animation.leaveDelay}
    >
      {toastList.map(toast => (
        <Toast key={toast.id} type={toast.type}>
          {toast.message}
        </Toast>
      ))}
    </ReactCssTransitionGroup>
  );
};

ToastList.propTypes = {
  toastList: PropTypes.arrayOf(PropTypes.object),
};

export default connect(
  state => ({ toastList: state.toastList })
)(ToastList);
