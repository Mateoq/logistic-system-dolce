import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions.
import {
  incrementCounter,
  decrementCounter,
 } from '../actions/counter-actions';

const Counter = ({ actions, value }) => (
  <div>
    <p>{value}</p>
    <button onClick={actions.incrementCounter}>+</button>
    <button onClick={actions.decrementCounter}>-</button>
    <br />
    <Link to={'/'}>Home</Link>
  </div>
);

Counter.propTypes = {
  actions: React.PropTypes.shape().isRequired,
  value: React.PropTypes.number,
};

export default connect(
  state => ({ value: state.counter }),
  dispatch => ({
    actions: bindActionCreators({
      incrementCounter,
      decrementCounter,
    }, dispatch),
  })
)(Counter);
