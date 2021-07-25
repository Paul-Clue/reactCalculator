import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let a = '';
  let b = '';

  if (numberOne) {
    a = Big(numberOne);
  } else {
    b = Big('0');
  }

  if (numberTwo) {
    b = Big(numberTwo);
  } else {
    b = Big('0');
  }

  switch (operation) {
    case '+':
      return a.plus(b).toString();
    case '-':
      return a.minus(b).toString();
    case 'x':
      return a.times(b).toString();
    case '/':
      if (b === '0') {
        return 'Error - Division by 0';
      }
      return a.div(b).toString();
    case '%':
      return a.times(b.div(100)).toString();
      // no default
  }

  return {};
};

export default operate;
