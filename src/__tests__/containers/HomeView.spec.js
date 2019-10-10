import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { HomeView, mapStateToProps } from '../../containers/HomeView';

configure({ adapter: new Adapter() });
let props;
let component;

describe('HomeView container', () => {
  props = {
    listEntries: jest.fn(),
    entries: {
      data: {
        entry: [
          {
            _id: '5d176131cf12c3000453a730',
            content:
              'Wafer liquorice tart wafer cupcake sweet croissant…candy bonbon cheesecake tootsie roll lemon drops.',
            title: 'Every day discovering something new',
            __v: 0
          },
          {
            _id: '5d176156cf12c3000453a731',
            content:
              'Sweet sweet roll pie jujubes chupa chups chupa chu…candy bonbon cheesecake tootsie roll lemon drops.',
            title: 'The long wait',
            __v: 0,
            updatedAt: '2019-06-29T13:02:14.342Z',
            createdAt: '2019-06-29T13:02:14.342Z'
          }
        ]
      }
    }
  };

  beforeEach(() => {
    component = shallow(<HomeView {...props} />);
  });

  it('renders correctly', () => {
    expect(component.length).toBe(1);
  });

  //   it('maps state to props', () => {
  //     const { entries } = props;

  //     expect(mapStateToProps('entries.data.entry')).toEqual({
  //       entries: entries.data.entry
  //     });
  //   });
});
