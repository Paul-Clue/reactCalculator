import React, { useState } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const result = calculate(data, buttonName);
    setData(result);
  }

  const { next, total, operation } = data;// eslint-disable-line
  const result = !next ? total : next;
  return (
    <div className="appDiv">
      <h1 className="math">Let&apos;s Do Some Math!</h1>
      <div>
        <Display result={result || '0'} />
      </div>
      <div>
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
