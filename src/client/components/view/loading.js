import React from 'react';

// styles
import '../../styles/components/_loading.scss';

const Loading = () => (
  <div className="u-center-block loading-view">
    <div className="u-center-block__content loading-animation">
      <span data-pos={1} className="loading-animation__item" />
      <span data-pos={2} className="loading-animation__item" />
      <span data-pos={3} className="loading-animation__item" />
    </div>
  </div>
);

export default Loading;
