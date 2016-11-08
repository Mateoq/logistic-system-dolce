import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Containers.
import { HomeContainer, LoginContainer } from './';

const App = ({ children, location }) => {
  const isOnLogin = location.pathname === '/login';
  if (isOnLogin) {
    return (<LoginContainer />);
  }
  return (
    <HomeContainer>
      {children}
    </HomeContainer>
  );
};

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape().isRequired,
};

export default connect(
  state => ({ routing: state.routing })
)(App);
