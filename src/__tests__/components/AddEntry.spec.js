import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import AddEntry from '../../components/AddEntry';

configure({ adapter: new Adapter() });
let component;

describe('AddEntry component', () => {
  beforeEach(() => {
    component = mount(<AddEntry />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
