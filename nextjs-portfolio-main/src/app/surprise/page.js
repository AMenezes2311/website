import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="container">
      {/* If the Valentine's card is part of the Under Construction theme, keep it; otherwise, consider removing or replacing it */}
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front"></div>
        <div className="card">
          <div className="text">Will<br/> You be<br/> My Valentine? </div>
          <div className="heart"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
