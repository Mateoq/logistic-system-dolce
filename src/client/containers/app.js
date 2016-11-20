import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// Containers.
import {
  SideNav,
  HeaderNav,
  ToastList,
  LoadingContainer,
} from './';

// Components
import { GridCell, Panel } from '../components/';

// Styles.
import '../styles/main.scss';

const App = ({ children, user }) => (
  <main className="o-grid o-grid--no-gutter app-content">
    {user.isAuthenticated &&
      <GridCell
        width={15}
        className="app-content__nav-column"
      >
        <SideNav />
      </GridCell>
    }
    <GridCell width={(user.isAuthenticated) ? 85 : 100} className="app-content__main-column">
      {user.isAuthenticated && <HeaderNav />}
      <Panel navTop={user.isAuthenticated} className="views-container">
        {children}
      </Panel>
    </GridCell>
    <ToastList />
    <LoadingContainer />
  </main>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.shape().isRequired,
};

export default connect(
  state => ({ user: state.user })
)(App);
