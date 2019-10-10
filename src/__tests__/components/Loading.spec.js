import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import Loading from '../../components/Loading';

configure({ adapter: new Adapter() });
let component;

describe('Loading component', () => {
  beforeEach(() => {
    component = mount(<Loading />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
