import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  return (
    <>
    <button type="button" className="square" >{/* eslint-disable-line*/}
      {name}
    </button>
    </>
  );
}

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
