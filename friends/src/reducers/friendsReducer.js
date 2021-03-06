import {
  FETCH_DATA,
  FETCH_ERROR,
  DATABASEADD_FRIEND,
  DATABASEUPDATE_FRIEND,
  DATABASEDELETE_FRIEND
} from '../actions';

const initialState = {
  friends: [],
  fetching: true,
  err: 'errdude'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        friends: action.payload,
        fetching: false
      };
    case FETCH_ERROR:
      return {
        ...state,
        err: action.payload
      };
    case DATABASEADD_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case DATABASEUPDATE_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    case DATABASEDELETE_FRIEND:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
};
