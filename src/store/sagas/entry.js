import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from '../../utils/api/entry';
import { listEntriesSuccess, listEntriesFailure } from '../actions/entry';
import { LIST_ENTRIES } from '../constants/entry';

function* getEntryAsync({ payload }) {
  try {
    let response = yield call(api.list);
    let data;
    if (response) {
      data = response.data || [];
      console.log(response);
    }
    yield put(listEntriesSuccess({ data }));
  } catch (error) {
    const errorMessage =
      error.response ||
      'Entries cannot be displayed. Please check your network and try again.';
    yield put(listEntriesFailure({ errorMessage }));
  }
}

export function* watcherListEntries() {
  yield takeLatest(LIST_ENTRIES, getEntryAsync);
}
