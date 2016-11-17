import React from 'react';

// styles
import '../../styles/components/_loading.scss';

const Loading = () => (
  <div className="u-center-block loading-view">
    <div className="u-center-block__content loading-animation">
      <span className="loading-animation__item" />
      <span className="loading-animation__item" />
      <span className="loading-animation__item" />
    </div>
  </div>
);

export default Loading;
