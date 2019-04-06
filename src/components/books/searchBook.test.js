import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../App';

configure({ adapter: new Adapter() });
describe('Search Component', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
