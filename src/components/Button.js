import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { name } = props;
  const { width } = props;
  const { wide } = props;
  const { color } = props;

  const style = {
    backgroundColor: color,
  };
  const cName = wide ? width[0] : width[1];
  const handleClick = () => (props.clickHandler(name));

  // const { name, clickHandler } = props;
  // const handleClick = () => (clickHandler(name));
  return (
    <>
      <button type="button" style={style} className={cName} onClick={handleClick}>
        {name}
      </button>
    </>
  );
}

Button.propTypes = { name: PropTypes.string.isRequired };
Button.propTypes = { clickHandler: PropTypes.func.isRequired };
Button.propTypes = { width: PropTypes.string.isRequired };
Button.propTypes = { wide: PropTypes.bool.isRequired };
Button.propTypes = { color: PropTypes.string };
Button.defaultProps = { color: 'orange' };

export default Button;
