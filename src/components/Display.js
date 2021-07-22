import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <form action="">
      <input type="text" id="lname" name="lname" className="form-control Calc" value={result} disabled />
    </form>
  );
}

Display.propTypes = { result: PropTypes.string };
Display.defaultProps = { result: '0' };

export default Display;
