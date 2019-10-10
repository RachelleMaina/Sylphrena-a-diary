import * as types from '../../../store/constants/entry';
import {
  listEntriesReducer,
  initialState
} from '../../../store/reducers/entry';

describe('List Entry reducers', () => {
  const actionOne = {
    type: types.LIST_ENTRIES
  };

  const actionTwo = {
    type: types.LIST_ENTRIES_SUCCESS
  };

  const actionThree = {
    type: types.LIST_ENTRIES_FAILURE
  };

  const firstState = {
    data: [],
    loading: false,
    errorMessage: []
  };

  const secondState = {
    data: [],
    loading: true,
    errorMessage: []
  };

  it('should return initial state', () => {
    expect(listEntriesReducer(initialState, {})).toEqual(initialState);
  });

  it('should update state with LIST_ENTRIES payload', () => {
    expect(listEntriesReducer(initialState, actionOne)).toEqual(secondState);
  });

  it('should update state with LIST_ENTRIES_FAILURE payload', () => {
    expect(listEntriesReducer(initialState, actionTwo)).toEqual(firstState);
  });

  it('should update state with LIST_ENTRIES_SUCCESS payload', () => {
    expect(listEntriesReducer(initialState, actionThree)).toEqual(firstState);
  });
});
