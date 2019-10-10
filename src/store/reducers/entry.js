import {
  LIST_ENTRIES,
  LIST_ENTRIES_SUCCESS,
  LIST_ENTRIES_FAILURE
} from '../constants/entry';

export const initialState = {
  data: [],
  loading: false,
  errorMessage: []
};

export const listEntriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_ENTRIES:
      return {
        ...state,
        ...payload,
        loading: true
      };
    case LIST_ENTRIES_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case LIST_ENTRIES_FAILURE:
      return {
        ...state,
        ...payload,
        loading: false
      };
    default:
      return state;
  }
};
