import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';// eslint-disable-line

function App() {
  return (
    <div className="appDiv">
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
