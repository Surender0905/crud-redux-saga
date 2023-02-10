import {
  CREATE_USER_FAIL,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_START,
  LOAD_USER_SUCCESS,
} from './action';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_START:
    case CREATE_USER_START:
      return {
        ...state,
        loading: true,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOAD_USER_FAIL:
    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
