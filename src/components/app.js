import React from 'react';

const App = ({ children }) => (
  <div className="container">
    <div className="content">
      {children}
    </div>
  </div>
);

Main.propTypes = {
  children: React.PropTypes.node,
};

export default App;
