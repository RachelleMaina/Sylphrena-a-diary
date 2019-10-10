import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import DateLabel from '../../components/DateLabel';

configure({ adapter: new Adapter() });
let component;

describe('DateLabel component', () => {
  beforeEach(() => {
    component = mount(<DateLabel />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
