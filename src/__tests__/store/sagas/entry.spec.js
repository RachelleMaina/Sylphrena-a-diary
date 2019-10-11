import { runSaga } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import { api } from '../../../utils/api/entry';
import { entries, errorMessage } from '../../../testData';
import { listEntryAsync, watcherListEntries } from '../../../store/sagas/entry';

describe('List Entries saga', () => {
  it('should handle listing entries in case of success', async () => {
    const dispatchedActions = [];
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({
        status: false,
        success: false,
        isRegistering: false
      })
    };
    api.list = jest.fn(() => Promise.resolve(entries));
    await runSaga(fakeStore, listEntryAsync, {}).done;
    expect(api.list.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([
      {
        payload: entries,
        type: 'LIST_ENTRIES_SUCCESS'
      }
    ]);
  });

  it('should not list entries in case of error', async () => {
    const dispatchedActions = [];
    const fakeStore = {
      dispatch: action => dispatchedActions.push(action),
      getState: () => ({
        status: false,
        success: false,
        isRegistering: false
      })
    };
    api.list = jest.fn(() => Promise.reject(entries));

    await runSaga(fakeStore, listEntryAsync, { payload: {} }).done;
    expect(api.list.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([
      {
        payload: { errorMessage },
        type: 'LIST_ENTRIES_FAILURE'
      }
    ]);
  });
});

describe('should wait for dispatched actions', () => {
  let generator = null;
  beforeEach(() => {
    generator = watcherListEntries();
  });
  const actionType = 'LIST_ENTRIES';
  test('should wait for the proper action', () => {
    put({ type: actionType });
    const actual = generator.next();
    expect(actual.value).toEqual(takeLatest(actionType, listEntryAsync));
  });
});
