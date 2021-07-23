import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="appDiv">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
