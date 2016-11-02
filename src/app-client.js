import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './app-router';

window.onload = () => {
  ReactDOM.render(
    <AppRouter />,
    document.getElementById('app')
  );
};
