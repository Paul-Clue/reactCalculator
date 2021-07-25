import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const handleClick = () => (props.clickHandler(name));

  // const { name, clickHandler } = props;
  // const handleClick = () => (clickHandler(name));

  return (
    <>
      <button type="button" className="square" onClick={handleClick}>
        {name}
      </button>
    </>
  );
}

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { clickHandler: PropTypes.func.isRequired };

export default Button;
