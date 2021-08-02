import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
// import '../App.css';
// import * as styles from '../App.css';

// const ButtonPanel = (props) => {
//   const handleClick = (buttonName) => (props.clickHandler(buttonName));
//   function renderSquare(i) {
//     return <Button name={i} clickHandler={handleClick} />;
//   }

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => (props.clickHandler(buttonName));
  function renderSquare(i, j) {
    return <Button color={j} width={['longButton', 'square']} name={i} clickHandler={handleClick} />;
  }

  return (
    <div className="board-all">
      <div className="board-row">
        {renderSquare('A/C', 'lightgrey')}
        {renderSquare('+/-', 'lightgrey')}
        {renderSquare('%', 'lightgrey')}
        {renderSquare('/')}
      </div>
      <div className="board-row">
        {renderSquare('7', 'lightgrey')}
        {renderSquare('8', 'lightgrey')}
        {renderSquare('9', 'lightgrey')}
        {renderSquare('x')}
      </div>
      <div className="board-row">
        {renderSquare('4', 'lightgrey')}
        {renderSquare('5', 'lightgrey')}
        {renderSquare('6', 'lightgrey')}
        {renderSquare('-')}
      </div>
      <div className="board-row">
        {renderSquare('1', 'lightgrey')}
        {renderSquare('2', 'lightgrey')}
        {renderSquare('3', 'lightgrey')}
        {renderSquare('+')}
      </div>
      <div className="board-row">
        <Button wide width={['longButton', 'square']} color="lightgrey" name="0" clickHandler={handleClick} />
        {renderSquare('.', 'lightgrey')}
        {renderSquare('=')}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
