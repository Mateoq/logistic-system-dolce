import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { routerActions } from 'react-router-redux';

// Styles
import '../styles/home-container.scss';

const HomeContainer = ({ children }) => (
  <main className="o-grid o-grid--no-gutter o-panel">
    <div className="o-grid__cell--width-15 o-panel-container">
      <nav className="c-nav o-panel">
        <div className="c-nav__content">Logo</div>
        <Link className="c-nav__item" to={'/'}>Dashboard</Link>
        <Link className="c-nav__item" to={'/packageReception'}>
          Recepción de Paquetes
        </Link>
        <Link className="c-nav__item" to={'/counter'}>Counter</Link>
      </nav>
    </div>
    <div className="o-grid__cell--width-85 o-panel-container">
      <nav className="c-nav c-nav--inline c-nav--light">
        <span className="c-nav__item">Salir</span>
      </nav>
      <div className="o-panel o-panel--nav-top">
        {children}
      </div>
    </div>
  </main>
);

HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default (HomeContainer);
