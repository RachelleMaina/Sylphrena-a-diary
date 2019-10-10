import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import AddButton from '../../components/AddButton';

configure({ adapter: new Adapter() });
let component;

describe('AddButton component', () => {
  beforeEach(() => {
    component = mount(<AddButton />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
