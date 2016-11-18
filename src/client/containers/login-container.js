import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';

// Constants.
import {
  USERNAME,
  PASSWORD,
} from '../../config/constants';

// Actions.
import {
  updateUsername,
  updatePassword,
  toggleRememberMe,
} from '../actions/login-form-actions';

import { requestLogin } from '../actions/user-actions';

// Components.
import { Login } from '../components/';

// Utils.
import { string } from '../utils/';

// Styles.
import '../styles/login-container.scss';

class LoginContainer extends Component {
  static propTypes = {
    actions: PropTypes.shape(),
    username: PropTypes.string,
    password: PropTypes.string,
    rememberMe: PropTypes.bool,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
      rememberMe,
    } = this.props;
    if (!string.empty(username) || !string.empty(password)) {
      this.props.actions.requestLogin({
        username,
        password,
        rememberMe,
      });
    }
  };

  handleInputChanges = (event) => {
    const type = event.target.dataset.group;
    const value = event.target.value;
    const { actions } = this.props;

    if (type === USERNAME) {
      actions.updateUsername(value);
    }

    if (type === PASSWORD) {
      actions.updatePassword(value);
    }
  };

  handleToggleRememberMe = () => {
    this.props.actions.toggleRememberMe();
  };

  render() {
    const {
      username,
      password,
      rememberMe,
    } = this.props;
    return (
      <div className="u-center-block login-container">
        <div className="u-center-block__content">
          <h1 className="c-heading">Porfavor ingrese</h1>
          <Login
            username={username}
            password={password}
            rememberMe={rememberMe}
            handleSubmit={this.handleSubmit}
            handleInputChanges={this.handleInputChanges}
            handleToggleRememberMe={this.handleToggleRememberMe}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state.loginForm,
  }),
  dispatch => ({
    actions: bindActionCreators({
      requestLogin,
      updateUsername,
      updatePassword,
      toggleRememberMe,
      ...routerActions,
    }, dispatch),
  })
)(LoginContainer);
