import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Nav Component', () => {
  test('It should render', () => {
    const nav = renderer.create(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    ).toJSON();
    expect(nav).toMatchSnapshot();
  });
});