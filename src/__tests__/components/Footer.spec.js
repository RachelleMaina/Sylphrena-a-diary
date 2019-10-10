import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Footer from '../../components/Footer';

configure({ adapter: new Adapter() });
let component;

describe('Footer component', () => {
  beforeEach(() => {
    component = mount(<Footer />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
