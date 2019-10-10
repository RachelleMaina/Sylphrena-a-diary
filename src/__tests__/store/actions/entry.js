import * as types from '../../../store/constants/entry';
import * as actions from '../../../store/actions/entry';

describe('Entry actions', () => {
  it('dispatches LIST_ENTRIES', () => {
    expect(actions.listEntries({}).type).toEqual(types.LIST_ENTRIES);
  });

  it('dispatches LIST_ENTRIES_SUCCESS', () => {
    expect(actions.listEntriesSuccess({}).type).toEqual(
      types.LIST_ENTRIES_SUCCESS
    );
  });

  it('dispatches LIST_ENTRIES_FAILURE', () => {
    expect(actions.listEntriesFailure({}).type).toEqual(
      types.LIST_ENTRIES_FAILURE
    );
  });
});
