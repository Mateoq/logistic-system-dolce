import React, { Component } from 'react';

// Components.
import {
  Nav,
  NavItem,
  NavContent,
} from '../../components/';

// Constants.
import * as routes from '../../constants/routes';
import * as types from '../../constants/types';

// Styles.
import '../../styles/layouts/_side-nav.scss';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.initItemRoutes();
  }

  mapItem = (item, key) => (
    <NavItem key={key} link={item.link}>
      {item.content}
    </NavItem>
  );

  initItemRoutes() {
    this.state = {
      items: [
        { type: types.Link, link: routes.DASHBOARD, content: 'Dashboard' },
        { type: types.Link, link: routes.PACKAGE_RECEPTION, content: 'Recepción de Paquetes' },
        { type: types.Link, link: routes.ASSIGN_ROUTES, content: 'Asignacón de Rutas' },
      ],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <Nav layout="side-nav">
        <NavContent>Logo</NavContent>
        {items.map((item, i) => (
          this.mapItem(item, i)
        ))}
      </Nav>
    );
  }
}

export default SideNav;
