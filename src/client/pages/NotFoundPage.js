import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{ marginTop: '150px' }}>
      <h3>Sorry, not sure what you're looking for.</h3>
      <p>Maybe try one of the links above?</p>
    </div>
  );
};

export default {
  component: NotFound
};
