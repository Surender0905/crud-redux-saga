export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const loadUsersStart = () => ({ type: LOAD_USER_START });

export const loadUsersSucess = (users) => ({
  type: LOAD_USER_SUCCESS,
  payload: users.data,
});

export const loadUsersFail = (message) => ({
  type: LOAD_USER_SUCCESS,
  payload: message,
});

export const createUserStart = (user) => ({
  type: CREATE_USER_START,
  payload: user,
});

export const createUserSucess = () => ({
  type: CREATE_USER_SUCCESS,
});

export const createUserFail = (message) => ({
  type: CREATE_USER_FAIL,
  payload: message,
});
