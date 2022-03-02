import React from 'react';

const NothingSelected = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    textAlign: 'center',
  };
  return (
    <div style={style}>
      <h1>Seleccione o agregue una nota nueva.</h1>
    </div>
  );
};

export default NothingSelected;
