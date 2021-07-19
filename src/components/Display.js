import React from 'react';
// import {Component} from 'react';

const divStyle = {
  textAlign: 'right',
};

function Display() {
  return (
    <form action="" className="Calc">
      <input type="text" id="lname" name="lname" style={divStyle} className="form-control" value="0" disabled />
    </form>
  );
}

export default Display;
