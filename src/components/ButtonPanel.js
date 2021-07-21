import React from 'react';

import Button from './Button';
import '../App.css';

class ButtonPanel extends React.Component {
  renderSquare(i) {// eslint-disable-line
    return <Button name={i}/>;// eslint-disable-line
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare('A/C')}
          {this.renderSquare('+/-')}
          {this.renderSquare('%')}
          {this.renderSquare('/')}
        </div>
        <div className="board-row">
          {this.renderSquare('7')}
          {this.renderSquare('8')}
          {this.renderSquare('9')}
          {this.renderSquare('X')}
        </div>
        <div className="board-row">
          {this.renderSquare('4')}
          {this.renderSquare('5')}
          {this.renderSquare('6')}
          {this.renderSquare('-')}
        </div>
        <div className="board-row">
          {this.renderSquare('1')}
          {this.renderSquare('2')}
          {this.renderSquare('3')}
          {this.renderSquare('+')}
        </div>
        <div className="board-row">
          {this.renderSquare('0')}
          {this.renderSquare('.')}
          {this.renderSquare('=')}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
