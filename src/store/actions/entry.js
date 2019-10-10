import {
  LIST_ENTRIES,
  LIST_ENTRIES_SUCCESS,
  LIST_ENTRIES_FAILURE
} from '../constants/entry';

export const listEntries = payload => ({
  type: LIST_ENTRIES,
  payload
});

export const listEntriesSuccess = payload => ({
  type: LIST_ENTRIES_SUCCESS,
  payload
});

export const listEntriesFailure = payload => ({
  type: LIST_ENTRIES_FAILURE,
  payload
});
