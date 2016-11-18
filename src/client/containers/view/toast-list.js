import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Components.
import { ToastContainer, Toast } from '../../components/';

class ToastList extends Component {

  render() {
    return (
      <ToastContainer bottomRight>
        <Toast>
          asdf
        </Toast>
      </ToastContainer>
    );
  }
}
