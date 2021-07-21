import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const divStyle = {
  width: '500px',
  margin: 'auto',
};

function App() {
  return (
    <div style={divStyle}>
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
