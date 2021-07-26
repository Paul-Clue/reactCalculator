import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../App.css';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => (props.clickHandler(buttonName));
  function renderSquare(i) {
    return <Button name={i} clickHandler={handleClick} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare('A/C')}
        {renderSquare('+/-')}
        {renderSquare('%')}
        {renderSquare('/')}
      </div>
      <div className="board-row">
        {renderSquare('7')}
        {renderSquare('8')}
        {renderSquare('9')}
        {renderSquare('x')}
      </div>
      <div className="board-row">
        {renderSquare('4')}
        {renderSquare('5')}
        {renderSquare('6')}
        {renderSquare('-')}
      </div>
      <div className="board-row">
        {renderSquare('1')}
        {renderSquare('2')}
        {renderSquare('3')}
        {renderSquare('+')}
      </div>
      <div className="board-row">
        {renderSquare('0')}
        {renderSquare('.')}
        {renderSquare('=')}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
