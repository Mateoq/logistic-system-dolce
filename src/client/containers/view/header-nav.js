import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions.
import { requestLogout } from '../../actions/user-actions';

// Components.
import {
  Nav,
  NavItem,
} from '../../components/';

class HeaderNav extends Component {
  static propTypes = {
    actions: PropTypes.shape().isRequired,
  };

  handleLogOut = () => {
    this.props.actions.requestLogout();
  }

  render() {
    return (
      <Nav
        inline
        theme="light"
      >
        <NavItem onClick={this.handleLogOut}>
          Salir
        </NavItem>
      </Nav>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    actions: bindActionCreators({ requestLogout }, dispatch),
  })
)(HeaderNav);
