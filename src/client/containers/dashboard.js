import React from 'react';

// Styles.
import '../styles/dashboard.scss';

const Dashboard = () => (
  <div className="u-pillar-box--large dashboard-container">
    <h2 className="c-heading">Main Group</h2>
    <div className="o-grid o-grid--wrap buttons-grid">
      <div className="o-grid__cell o-grid__cell--width-fixed buttons-grid__cell">
        <div className="buttons-grid__item" data-value="1">
          <div className="u-absolute-center">1</div>
        </div>
      </div>
      <div className="o-grid__cell o-grid__cell--width-fixed buttons-grid__cell">
        <div className="buttons-grid__item" data-value="2">
          <div className="u-absolute-center">2</div>
        </div>
      </div>
      <div className="o-grid__cell o-grid__cell--width-fixed buttons-grid__cell">
        <div className="buttons-grid__item" data-value="3">
          <div className="u-absolute-center">3</div>
        </div>
      </div>
      <div className="o-grid__cell o-grid__cell--width-fixed buttons-grid__cell">
        <div className="buttons-grid__item" data-value="4">
          <div className="u-absolute-center">4</div>
        </div>
      </div>
    </div>
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
  </div>
);

export default Dashboard;
