import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => {
  return (
    <div className="content">
      <div className="planet">
        <div className="ring"></div>
        <div className="cover-ring"></div>
        <div className="spots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>loading</p>
    </div>
  );
};

export default Loader;
