export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

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

export const deleteUserStart = (userId) => ({
  type: DELETE_USER_START,
  payload: userId,
});

export const deleteUserSucess = (userId) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserFail = (message) => ({
  type: DELETE_USER_FAIL,
  payload: message,
});

export const updateUserStart = (userInfo) => ({
  type: UPDATE_USER_START,
  payload: userInfo,
});

export const updateUserSucess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserFail = (message) => ({
  type: UPDATE_USER_FAIL,
  payload: message,
});
