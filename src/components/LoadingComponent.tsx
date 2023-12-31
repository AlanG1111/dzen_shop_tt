import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='spinner-grow text-success center-block' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponent;
