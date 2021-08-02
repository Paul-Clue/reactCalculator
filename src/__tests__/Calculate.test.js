import calculate from '../logic/calculate';

describe('Calculate Function', () => {
  let data = { total: null, next: null, operation: null };
  let name;

  test('It should return null for all values when "A/C" is clicked', () => {
    name = 'A/C';
    expect(calculate(data, name)).toEqual({ total: null, next: null, operation: null });
  });

  test('It should negate total when "+/-" is clicked and operation is null', () => {
    name = '+/-';
    data = { total: '123', next: null, operation: null };
    expect(calculate(data, name)).toEqual({ total: '-123', next: null, operation: null });
  });

  test('It should negate next when "+/-" is clicked and operation is not null', () => {
    name = '+/-';
    data = { total: '123', next: '798', operation: '+' };
    expect(calculate(data, name)).toEqual({ total: '123', next: '-798', operation: '+' });
  });

  test('It should return a new operation when any operation ("+", "-", "×", "÷") is clicked and operation and next are null', () => {
    name = '+';
    data = { total: '123', next: null, operation: null };
    expect(calculate(data, name)).toEqual({ total: '123', next: null, operation: '+' });
  });

  test('It should return a new operation when any operation ("+", "-", "×", "÷") is clicked and next is null', () => {
    name = '-';
    data = { total: '123', next: null, operation: '+' };
    expect(calculate(data, name)).toEqual({ total: '123', next: null, operation: '-' });
  });

  test('It should return the correct sum when "+" is clicked and next is not null', () => {
    name = '+';
    data = { total: '123', next: '678', operation: '+' };
    expect(calculate(data, name)).toEqual({ total: '801', next: null, operation: '+' });
  });

  test('It should return the correct percentage when "%" is clicked and next is null', () => {
    name = '%';
    data = { total: '123', next: null, operation: '%' };
    expect(calculate(data, name)).toEqual({ total: '1.23', next: null, operation: '%' });
  });

  test('It should add a period(.) when "." is clicked and operator is null', () => {
    name = '.';
    data = { total: '123', next: '.', operation: null };
    expect(calculate(data, name)).toEqual({ total: '123.', next: '.', operation: null });
  });

  test('It should concatenate name variable with the total if operation is null and next is null', () => {
    const concat = Math.floor(Math.random() * 10).toString();
    name = concat;
    data = { total: '123', next: null, operation: null };
    expect(calculate(data, name)).toEqual({ total: `123${concat}`, next: null, operation: null });
  });

  test('It should concatenate name variable with next if operation is not null and next is null', () => {
    const concat = Math.floor(Math.random() * 10).toString();
    name = concat;
    data = { total: '123', next: null, operation: '-' };
    expect(calculate(data, name)).toEqual({ total: '123', next: `${concat}`, operation: '-' });
  });

  test('It should concatenate name variable with next if operation is not null and next is null', () => {
    const concat = Math.floor(Math.random() * 10).toString();
    name = concat;
    data = { total: '123', next: null, operation: '=' };
    expect(calculate(data, name)).toEqual({ total: `${concat}`, next: null, operation: null });
  });
});
