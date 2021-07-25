import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (

  // <div className="Calc">
  //   <h1>{result}</h1>
  // </div>

    <form action="">
      <input type="text" id="lname" name="lname" className="form-control Calc" value={result} />
    </form>
  );
}

Display.propTypes = { result: PropTypes.string };
Display.defaultProps = { result: '0' };

export default Display;
