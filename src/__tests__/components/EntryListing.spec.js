import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import EntryListing from '../../components/EntryListing';

configure({ adapter: new Adapter() });
let component;

describe('EntryListing component', () => {
  beforeEach(() => {
    component = mount(<EntryListing />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });
});
