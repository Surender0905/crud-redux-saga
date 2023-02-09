import { LOAD_USER_FAIL, LOAD_USER_START, LOAD_USER_SUCCESS } from './action';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_START:
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
    case LOAD_USER_FAIL:
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
