import React, { PropTypes } from 'react';

// Containers.
import {
  SideNav,
  HeaderNav,
  LoadingContainer,
} from './';

// Components
import { GridCell } from '../components/';

// Styles.
import '../styles/main.scss';

const App = ({ children }) => (
  <main className="o-grid o-grid--no-gutter app-content">
    <GridCell width={15} className="app-content__nav-column">
      <SideNav />
    </GridCell>
    <GridCell width={85} className="app-content__main-column">
      <HeaderNav />
      <div className="o-panel o-panel--nav-top views-container">
        {children}
      </div>
    </GridCell>
    <LoadingContainer />
  </main>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
