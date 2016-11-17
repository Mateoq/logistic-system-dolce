import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

const authWrapper = (options) => {
  const {
    authSelector,
    predicate,
    replaceRoute,
  } = options;

  const isAuthorized = data => (predicate(data));

  function wrapComponent(ComposedComponents) {
    class Authenticate extends Component {
      static propTypes = {
        actions: PropTypes.shape().isRequired,
        user: PropTypes.shape().isRequired,
      };

      componentWillMount() {
        console.log(this.props.user);
        if (!isAuthorized(this.props.user)) {
          this.props.actions.push(replaceRoute);
        }
      }

      componentWillReceiveProps(nextProps) {
        if (!isAuthorized(nextProps.user)) {
          this.props.actions.push(replaceRoute);
        }
      }

      render() {
        return (<ComposedComponents {...this.props} />);
      }
    }

    return connect(
      (state, ownProps) => ({ user: authSelector(state, ownProps) }),
      dispatch => ({
        actions: bindActionCreators({ ...routerActions }, dispatch),
      })
    )(Authenticate);
  }

  return wrapComponent;
};

export default authWrapper;
