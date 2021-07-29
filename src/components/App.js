import React from 'react';
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
    const data = calculate(state, buttonName);
    this.setState(data);
  }


  const { next, total, operation } = this.state;// eslint-disable-line
  const result = !next ? total : next;
  return (
    <div className="appDiv">
      <Display result={result || '0'} />
      <ButtonPanel clickHandler={this.handleClick} />
    </div>
  );

}

export default App;
