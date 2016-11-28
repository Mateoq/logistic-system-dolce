import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Containers.
import {
  ButtonsGrid,
} from './';

// Components.
import {
  PillarBox,
} from '../components/';

// Actions.
import {
  updateMainGroup,
  updateZone,
} from '../actions/dashboard-actions';

// Styles.
import '../styles/dashboard.scss';

class Dashboard extends Component {
  static propTypes = {
    actions: PropTypes.shape().isRequired,
    data: PropTypes.shape().isRequired,
    selectedGroup: PropTypes.shape(),
    //selectedZone: PropTypes.shape(),
  };

  mapGroups = (groups, selectedGroup) => (
    groups.map(group => ({
      value: group.id,
      text: group.name,
      checked: selectedGroup && selectedGroup.id === group.id,
    }))
  );

  handleChangeGroup = (group) => {
    console.log(group);
    this.props.actions.updateMainGroup(group);
  };

  render() {
    const {
      data,
      selectedGroup,
    } = this.props;

    return (
      <PillarBox size="large" className="dashboard-container">
        <h2 className="c-heading">Main Group</h2>
        <ButtonsGrid
          groupName="main_group"
          cells={this.mapGroups(data.groups, selectedGroup)}
          handleChangeGroup={this.handleChangeGroup}
        />

        <h2 className="c-heading">Zonas</h2>
        <div className="o-grid o-grid--wrap buttons-grid">
          <div className="o-grid__cell o-grid__cell--width-fixed buttons-grid__cell">
            <div className="buttons-grid__item" data-value="002">
              <div className="u-absolute-center">002</div>
            </div>
          </div>
          <div className="o-grid__cell o-grid__cell--width-fixed buttons-grid__cell">
            <div className="buttons-grid__item" data-value="003">
              <div className="u-absolute-center">003</div>
            </div>
          </div>
        </div>

        <h2 className="c-heading">Pedidos</h2>
        <div className="c-table c-table--striped">
          <div className="c-table__row c-table__row--heading">
            <span className="c-table__cell">Zona</span>
            <span className="c-table__cell">Pedido No</span>
            <span className="c-table__cell">Cédula Asesora</span>
            <span className="c-table__cell">Nombre Asesora</span>
          </div>
          <div className="c-table__row">
            <span className="c-table__cell">002</span>
            <span className="c-table__cell">15523656</span>
            <span className="c-table__cell">123456789</span>
            <span className="c-table__cell">Pepita Perez</span>
          </div>
        </div>
      </PillarBox>
    );
  }
}

export default connect(
  state => ({ ...state.dashboard }),
  dispatch => ({
    actions: bindActionCreators({
      updateMainGroup,
      updateZone,
    }, dispatch),
  })
)(Dashboard);
