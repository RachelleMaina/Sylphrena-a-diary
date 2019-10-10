import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import BreadCrumbs from '../../components/BreadCrumbs';

configure({ adapter: new Adapter() });
let component;

describe('BreadCrumbs component', () => {
  beforeEach(() => {
    component = mount(<BreadCrumbs />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
