import { all, fork } from 'redux-saga/effects';
import { watcherListEntries } from './entry';

export default function* root() {
  yield all([fork(watcherListEntries)]);
}
