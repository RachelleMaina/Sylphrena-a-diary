import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { entries } from '../../testData';
import { HomeView, mapStateToProps } from '../../containers/HomeView';

configure({ adapter: new Adapter() });
let props;
let component;

describe('HomeView container', () => {
  props = {
    listEntries: jest.fn(),
    entries
  };

  beforeEach(() => {
    component = shallow(<HomeView {...props} />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });

  it('maps state to props', () => {
    let state = {
      listEntries: entries
    };
    expect(mapStateToProps(state)).toEqual({ entries: state.listEntries });
  });
});
