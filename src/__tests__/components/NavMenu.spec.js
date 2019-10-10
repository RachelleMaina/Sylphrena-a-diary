import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import NavMenu from '../../components/NavMenu';

configure({ adapter: new Adapter() });
let component;

describe('NavMenu component', () => {
  beforeEach(() => {
    component = mount(<NavMenu />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
