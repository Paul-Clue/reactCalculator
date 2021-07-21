import React from 'react';
import PropTypes from 'prop-types';

const divStyle = {
  textAlign: 'right',
};

function Display(props) {
  const { result } = props;
  return (
    <form action="">
      <input type="text" id="lname" name="lname" style={divStyle} className="form-control Calc" value={result} disabled />
    </form>
  );
}

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
